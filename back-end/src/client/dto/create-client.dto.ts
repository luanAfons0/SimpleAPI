import { PickType } from '@nestjs/mapped-types';
import { Client } from '../entities/client.entity';

export class CreateClientDto extends PickType(Client, [
  'firstName',
  'lastName',
  'document',
  'email',
  'phoneNumber',
]) {
  password?: string;
}
