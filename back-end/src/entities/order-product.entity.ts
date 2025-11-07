import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Product } from './product.entity';
import { Order } from './order.entity';

@Entity()
export class OrderProduct {
  @PrimaryKey({ type: 'bigint' })
  id!: number;

  @Property({ length: 255, nullable: true })
  extraInfos?: string;

  @Property({ type: 'integer' })
  quantity!: number;

  @Property({ type: 'decimal', precision: 10, scale: 2 })
  productPrice!: number;

  @Property({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalValue!: number;

  @ManyToOne(() => Product)
  product!: Product;

  @ManyToOne(() => Order)
  relatedOrder!: Order;

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
