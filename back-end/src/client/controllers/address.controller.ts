import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AddressService } from 'src/address/services/address.service';

@Controller('addresses')
export class AddressController {
    constructor(private readonly addressService: AddressService) {}
}