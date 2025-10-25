import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Post,
} from '@nestjs/common';
import { CreateAddressDto } from '../dto/create-address.dto';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Address } from '../../entities/address.entity';
import { Client } from '../../entities/client.entity';
import { UpdateClientDto } from 'src/client/dto/update-client.dto';
import { GetAddressDto } from '../dto/get-address.dto';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: EntityRepository<Address>,

        @InjectRepository(Client)
        private readonly clientRepository: EntityRepository<Client>
    ) { }

    @Post()
    async create(@Body() createAddressDto: CreateAddressDto)
    {
        const client = await this.clientRepository.findOne(
            { id: createAddressDto.clientId }
        )

        if (client == null)
            throw new HttpException('The client was not found', HttpStatus.NOT_FOUND);

        const address = await this.addressRepository.create({
          ...createAddressDto,
          client,
          createdAt: new Date,
          updatedAt: new Date,
        });

        const em = this.addressRepository.getEntityManager();
        em.persist(address);
        await em.flush();

        return { message: 'Address created successfully' };
    }

    async findOne(id: number) {
      const address = await this.addressRepository.findOne(
        { id: id, deletedAt: null },
        { fields: ['state', 'city', 'neighborhood', 'street', 'number', 'complement', 'zipCode', 'client'] }
      );

      if (!address)
        throw new HttpException('Address not found', HttpStatus.NOT_FOUND);

      var getAddressDto = new GetAddressDto(address);

      return getAddressDto;
    }
    
      async update(id: number, @Body() updateClientDto: UpdateClientDto)
      {
        if (updateClientDto.clientId)
        {
          const client = await this.clientRepository.findOne(
              { id: updateClientDto.clientId }
          )

          if (client == null)
              throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
        }

        const address = await this.addressRepository.findOne(
          { id: id },
          { fields: ['street', 'number', 'complement', 'neighborhood', 'city', 'state', 'zipCode'] },
        );

        if (!address)
          throw new HttpException('Address not found', HttpStatus.NOT_FOUND);

        if (updateClientDto.complement != undefined)
          address.complement = updateClientDto.complement;

        ['street', 'number', 'neighborhood', 'city', 'state', 'zipCode'].map(
          (value) => {
            if (updateClientDto[value]) address[value] = updateClientDto[value];
          },
        );

        const em = this.addressRepository.getEntityManager();
        await em.flush();

        return {
          message: 'Address updated successfully',
        };
      }
    
      async remove(id: number) {
        const address = await this.addressRepository.findOne(
          { id: id, deletedAt: null },
          { fields: ['id', 'deletedAt'] }
        );

        if (!address)
          throw new HttpException('Address not found', HttpStatus.NOT_FOUND);

        address.deletedAt = new Date();

        const em = this.addressRepository.getEntityManager();
        await em.flush();

        return { message: 'Address deleted successfully' };
      }
}