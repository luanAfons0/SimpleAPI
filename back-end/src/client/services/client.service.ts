import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
// import { EntityRepository } from '@mikro-orm/core';
// import { Client } from '../entities/client.entity';
// import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class ClientService {
  constructor() {} // private readonly clientRepository: EntityRepository<Client>, // @InjectRepository(Client)

  create(createClientDto: CreateClientDto) {
    console.log(createClientDto);
    return 'This action adds a new client';
  }

  findAll() {
    return `This action returns all client`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    console.log(updateClientDto);
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
