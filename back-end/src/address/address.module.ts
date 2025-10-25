import { Module } from '@nestjs/common';
import { AddressesController } from './controllers/address.controller';
import { AddressesService } from './services/address.service';

@Module({
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
