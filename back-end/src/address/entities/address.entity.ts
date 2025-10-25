import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Client } from '../../client/entities/client.entity';

@Entity()
export class Address {
  @PrimaryKey({ type: 'bigint' })
  id!: number;

  @Property({ length: 100 })
  street!: string;

  @Property({ length: 45 })
  number!: string;

  @Property({ length: 100, nullable: true })
  complement?: string;

  @Property({ length: 100 })
  neighborhood!: string;

  @Property({ length: 60 })
  city!: string;

  @Property({ length: 50 })
  state!: string;

  @Property({ length: 100 })
  zipCode!: string;

  @ManyToOne(() => Client)
  client!: Client;

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
