import { Entity, Enum, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Client } from './client.entity';
import { Address } from './address.entity';
import { OrderStatus } from '../enums/order-status.enum';
import { PaymentStatus } from '../enums/payment-status.enum';

@Entity()
export class Order {
  @PrimaryKey({ type: 'integer' })
  id!: number;

  @Property({ type: 'double', nullable: true })
  totalDiscount?: number = 0;

  @Property({ type: 'double', nullable: true })
  extraFee?: number = 0;

  @Property({ type: 'double', nullable: true })
  shippingValue?: number = 0;

  @Property({ type: 'double', default: 0 })
  totalValue: number = 0;

  @Enum(() => PaymentStatus)
  paymentStatus!: PaymentStatus;

  @Enum(() => OrderStatus)
  orderStatus!: OrderStatus;

  @ManyToOne(() => Client)
  client!: Client;

  @ManyToOne(() => Address)
  address!: Address;

  @Property({ nullable: true })
  deletedAt?: Date;

  @Property({
    nullable: true,
    onCreate: () => new Date(),
  })
  createdAt: Date = new Date();

  @Property({
    nullable: true,
    onUpdate: () => new Date(),
    onCreate: () => new Date(),
  })
  updatedAt?: Date = new Date();
}

