import { Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from '../dto/create-order-product.dto';
import { UpdateOrderProductDto } from '../dto/update-order-product.dto';

@Injectable()
export class OrderProductService {
  create(createOrderProductDto: CreateOrderProductDto) {
    console.log(createOrderProductDto);

    return 'This action adds a new orderProduct';
  }

  findAll() {
    return `This action returns all orderProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderProduct`;
  }

  update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    console.log(updateOrderProductDto);

    return `This action updates a #${id} orderProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderProduct`;
  }
}
