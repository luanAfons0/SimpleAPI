import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Post,
} from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Address } from 'src/address/entities/address.entity';
import { Client } from '../entities/client.entity';
import { CreateAddressDto } from '../dto/create-address.dto';

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
        const clientExists = await this.clientRepository.findOne(
            { id: createAddressDto.clientId },
            { fields: ['id'] }
        ) !== null

        if (!clientExists)
            throw new HttpException('The client was not found', HttpStatus.NOT_FOUND);

        const address = await this.addressRepository.create({
            ...createAddressDto,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        const em = this.addressRepository.getEntityManager();
        em.persist(address);
        await em.flush();

        return { message: 'Address created successfully' };
    }
}