import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Order } from 'src/entities/order.entity';
import { EntityRepository } from '@mikro-orm/core';
import { Client } from 'src/entities/client.entity';
import { Address } from 'src/entities/address.entity';
import { GetOrderDto } from '../dto/get-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: EntityRepository<Order>,

    @InjectRepository(Client)
    private readonly clientRepository: EntityRepository<Client>,

    @InjectRepository(Address)
    private readonly addressRepository: EntityRepository<Address>
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    const client = await this.clientRepository.findOne(
      { id: createOrderDto.clientId }
    )

    if (client == null)
      throw new HttpException('Client was not found', HttpStatus.NOT_FOUND);

    const address = await this.addressRepository.findOne(
      { id: createOrderDto.addressId }
    )

    if (address == null)
      throw new HttpException('Address was not found', HttpStatus.NOT_FOUND);

    const order = await this.orderRepository.create({
      ...createOrderDto,
      client,
      address,
      createdAt: new Date,
      updatedAt: new Date
    });

    const em = this.orderRepository.getEntityManager();
    em.persist(order);
    await em.flush();

    return { message: 'Order created successfully' };
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOne(
      { id: id, deletedAt: null },
      { fields: ['totalDiscount', 'extraFee', 'shippingValue', 'totalValue', 'paymentStatus', 'orderStatus', 'address', 'client'] }
    );

    if (!order)
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);

    var getOrderDto = new GetOrderDto(order);

    return getOrderDto;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    let client, address;

    if (updateOrderDto.clientId)
    {
      client = await this.clientRepository.findOne(
          { id: updateOrderDto.clientId }
      )

      if (client == null)
          throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    if (updateOrderDto.addressId)
    {
      address = await this.addressRepository.findOne(
          { id: updateOrderDto.addressId }
      )

      if (address == null)
          throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }

    const order = await this.orderRepository.findOne(
      { id: id },
      { fields: ['totalDiscount', 'extraFee', 'shippingValue', 'totalValue', 'paymentStatus', 'orderStatus', 'client', 'address'] },
    );

    if (!order)
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);

    if (client)
      order.client = client;

    if (address)
      order.address = address;

    ['totalDiscount', 'extraFee', 'shippingValue', 'totalValue', 'paymentStatus', 'orderStatus'].map(
      (value) => {
        if (updateOrderDto[value] != undefined) order[value] = updateOrderDto[value];
      },
    );

    const em = this.orderRepository.getEntityManager();
    await em.flush();

    return {
      message: 'Order updated successfully',
    };
  }

  async remove(id: number) {
    const order = await this.orderRepository.findOne(
      { id: id, deletedAt: null },
      { fields: ['id', 'deletedAt'] }
    );

    if (!order)
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);

    order.deletedAt = new Date();

    const em = this.orderRepository.getEntityManager();
    await em.flush();

    return { message: 'Order deleted successfully' };
  }
}