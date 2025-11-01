import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from '../dto/create-order-product.dto';
import { UpdateOrderProductDto } from '../dto/update-order-product.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Order } from 'src/entities/order.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import { OrderProduct } from 'src/entities/order-product.entity';
import { Product } from 'src/entities/product.entity';
import { GetOrderProductDto } from '../dto/get-order-product.dto';

@Injectable()
export class OrderProductService {
  constructor(
      @InjectRepository(Order)
      private readonly orderRepository: EntityRepository<Order>,
  
      @InjectRepository(Product)
      private readonly productRepository: EntityRepository<Product>,

      @InjectRepository(OrderProduct)
      private readonly orderProductRepository: EntityRepository<OrderProduct>
    ) { }

  async create(createOrderProductDto: CreateOrderProductDto) {
    const product = await this.productRepository.findOne(
      { id: createOrderProductDto.productId }
    )

    if (product == null)
      throw new HttpException('Product was not found', HttpStatus.NOT_FOUND);

    const order = await this.orderRepository.findOne(
      { id: createOrderProductDto.orderId }
    )

    if (order == null)
      throw new HttpException('Order was not found', HttpStatus.NOT_FOUND);

    const productOrder = await this.orderProductRepository.create({
      ...createOrderProductDto,
      product,
      order,
      createdAt: new Date,
      updatedAt: new Date
    });

    const em = this.orderProductRepository.getEntityManager();
    em.persist(productOrder);
    await em.flush();

    return { message: 'Product order created successfully' };
  }

  async findOne(id: number) {
    const orderProduct = await this.orderProductRepository.findOne(
      { id: id, deletedAt: null },
      { fields: ['extraInfos', 'quantity', 'productPrice', 'totalValue', 'product', 'order'] }
    );

    if (!orderProduct)
      throw new HttpException('Product order not found', HttpStatus.NOT_FOUND);

    var getOrderProductDto = new GetOrderProductDto(orderProduct);

    return getOrderProductDto;
  }

  async update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    let product, order;

    if (updateOrderProductDto.productId)
    {
      product = await this.productRepository.findOne(
          { id: updateOrderProductDto.productId }
      )

      if (product == null)
          throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    if (updateOrderProductDto.orderId)
    {
      order = await this.orderRepository.findOne(
          { id: updateOrderProductDto.orderId }
      )

      if (order == null)
          throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }

    const orderProduct = await this.orderProductRepository.findOne(
      { id: id, deletedAt: null },
      { fields: ['extraInfos', 'quantity', 'productPrice', 'totalValue', 'product', 'order'] }
    );

    if (!orderProduct)
      throw new HttpException('Product order not found', HttpStatus.NOT_FOUND);

    if (product)
      orderProduct.product = product;

    if (order)
      orderProduct.order = order;

    ['extraInfos', 'quantity', 'productPrice', 'totalValue'].map(
      (value) => {
        if (updateOrderProductDto[value] != undefined) orderProduct[value] = updateOrderProductDto[value];
      },
    );

    const em = this.orderProductRepository.getEntityManager();
    await em.flush();

    return {
      message: 'Product order updated successfully',
    };
  }

  async remove(id: number) {
    const orderProduct = await this.orderProductRepository.findOne(
      { id: id, deletedAt: null },
      { fields: ['id', 'deletedAt'] }
    );

    if (!orderProduct)
      throw new HttpException('Product order not found', HttpStatus.NOT_FOUND);

    orderProduct.deletedAt = new Date();

    const em = this.orderProductRepository.getEntityManager();
    await em.flush();

    return { message: 'Product order deleted successfully' };
  }
}
