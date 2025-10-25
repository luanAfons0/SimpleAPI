import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Post,
} from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Client } from '../entities/client.entity';
import { EntityRepository } from '@mikro-orm/core';
import { GetClientDTO } from '../dto/get-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: EntityRepository<Client>,
  ) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    const newClient = this.clientRepository.create({
      ...createClientDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const em = this.clientRepository.getEntityManager();
    em.persist(newClient);
    await em.flush();

    return { message: 'Client created successfully' };
  }

  async findOne(id: number) {
    const client = await this.clientRepository.findOne(
      {
        id: id,
        deletedAt: null,
      },
      {
        fields: ['name', 'email', 'clientType', 'document', 'phoneNumber'],
      },
    );

    if (!client)
      throw new HttpException('The client was not found', HttpStatus.NOT_FOUND);

    const clientDto = new GetClientDTO(client);

    return clientDto;
  }

  async update(id: number, @Body() updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findOne(
      {
        id: id,
      },
      {
        fields: ['name', 'email', 'document', 'phoneNumber'],
      },
    );

    if (!client)
      throw new HttpException('The client was not found', HttpStatus.NOT_FOUND);

    ['firstName', 'lastName', 'email', 'document', 'phoneNumber'].map(
      (value) => {
        if (updateClientDto[value]) client[value] = updateClientDto[value];
      },
    );

    const em = this.clientRepository.getEntityManager();
    await em.flush();

    return {
      message: 'The client was updated successfully',
    };
  }

  async remove(id: number) {
    const clientToDelete = await this.clientRepository.findOne(
      {
        id: id,
      },
      {
        fields: ['id', 'deletedAt'],
      },
    );

    if (!clientToDelete)
      throw new HttpException('The client was not found', HttpStatus.NOT_FOUND);

    clientToDelete.deletedAt = new Date();

    const em = this.clientRepository.getEntityManager();
    await em.flush();

    return { message: 'Client deleted successfully' };
  }
}
