import { PartialType } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';

export class UpdateClientDto extends PartialType(CreateAddressDto) {}
