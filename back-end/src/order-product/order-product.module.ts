import { Module } from '@nestjs/common';
import { OrderProductController } from './controllers/order-product.controller';
import { OrderProductService } from './services/order-product.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Order } from 'src/entities/order.entity';
import { Product } from 'src/entities/product.entity';
import { OrderProduct } from 'src/entities/order-product.entity';
import { SecurityModule } from 'src/security/sercurity.module';

@Module({
  imports: [MikroOrmModule.forFeature([Order, Product, OrderProduct]), SecurityModule],
  controllers: [OrderProductController],
  providers: [OrderProductService],
})
export class OrderProductModule {}
