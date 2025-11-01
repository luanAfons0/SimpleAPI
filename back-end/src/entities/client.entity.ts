import { Entity, PrimaryKey, Property, Enum } from '@mikro-orm/core';
import { ClientType } from '../enums/client-type.enum';

@Entity()
export class Client {
  @PrimaryKey({ type: 'bigint' })
  id!: number;

  @Property({ length: 100 })
  name!: string;

  @Enum(() => ClientType)
  clientType!: ClientType;

  @Property({ length: 19, unique: true })
  document!: string;

  @Property({ length: 100, unique: true })
  email!: string;

  @Property({ length: 15 })
  phoneNumber!: string;

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
