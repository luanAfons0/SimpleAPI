import { Migration } from '@mikro-orm/migrations';

export class Migration20251031230140 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`order\` (\`id\` int unsigned not null auto_increment primary key, \`total_discount\` double not null default 0, \`extra_fee\` double not null default 0, \`shipping_value\` double not null default 0, \`total_value\` double not null default 0, \`payment_status\` enum('Pago', 'Recusado', 'Reembolsado') not null, \`order_status\` enum('Criado', 'Em produção', 'Cancelado', 'Finalizado') not null, \`client_id\` bigint unsigned not null, \`address_id\` bigint unsigned not null, \`deleted_at\` datetime null, \`created_at\` datetime not null, \`updated_at\` datetime null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`order\` add index \`order_client_id_index\`(\`client_id\`);`);
    this.addSql(`alter table \`order\` add index \`order_address_id_index\`(\`address_id\`);`);

    this.addSql(`alter table \`order\` add constraint \`order_client_id_foreign\` foreign key (\`client_id\`) references \`client\` (\`id\`) on update cascade;`);
    this.addSql(`alter table \`order\` add constraint \`order_address_id_foreign\` foreign key (\`address_id\`) references \`address\` (\`id\`) on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`order\`;`);
  }

}
