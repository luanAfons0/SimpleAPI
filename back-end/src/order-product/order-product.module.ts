import { Module } from '@nestjs/common';
import { OrderProductController } from './controllers/order-product.controller';
import { OrderProductService } from './services/order-product.service';

@Module({
  controllers: [OrderProductController],
  providers: [OrderProductService],
})
export class OrderProductModule {}
