import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Client {
  @PrimaryKey({ type: 'bigint' })
  id!: number;

  @Property({ length: 50 })
  firstName!: string;

  @Property({ length: 50 })
  lastName!: string;

  @Property({ length: 14, unique: true })
  document!: string;

  @Property({ length: 100, unique: true })
  email!: string;

  @Property({ length: 60 })
  password!: string;

  @Property({ length: 15 })
  phoneNumber!: string;

  @Property({ nullable: true })
  deletedAt?: Date;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
