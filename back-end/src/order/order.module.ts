import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Order } from 'src/entities/order.entity';
import { SecurityModule } from 'src/security/sercurity.module';
import { Address } from 'src/entities/address.entity';
import { Client } from 'src/entities/client.entity';

@Module({
    imports: [MikroOrmModule.forFeature([Order, Address, Client]), SecurityModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
