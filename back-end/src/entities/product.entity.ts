import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Product {
  @PrimaryKey({ type: 'bigint' })
  id!: number;

  @Property({ length: 50, unique: true })
  sku!: string;

  @Property({ length: 100 })
  name!: string;

  @Property({ length: 255, nullable: true })
  imageUrl!: string;

  @Property({ length: 255, nullable: true })
  description!: string;

  @Property({ type: 'integer' })
  stock!: number;

  @Property({ type: 'decimal', precision: 10, scale: 2 })
  price!: number;

  @Property({ nullable: true })
  deletedAt?: Date;

  @Property()
  createdAt: Date = new Date();

  @Property({
    nullable: true,
    onUpdate: () => new Date(),
    onCreate: () => new Date(),
  })
  updatedAt?: Date = new Date();
}
