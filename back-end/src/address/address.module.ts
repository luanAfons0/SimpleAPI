import { Module } from '@nestjs/common';
import { AddressesController } from './controllers/address.controller';
import { AddressService } from './services/address.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Client } from 'src/entities/client.entity';
import { Address } from 'src/entities/address.entity';
import { SecurityModule } from 'src/security/sercurity.module';

@Module({
  imports: [MikroOrmModule.forFeature([Client, Address]), SecurityModule],
  controllers: [AddressesController],
  providers: [AddressService],
})
export class AddressesModule {}
