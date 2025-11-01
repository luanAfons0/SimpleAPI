import { Migration } from '@mikro-orm/migrations';

export class Migration20251025221904 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table \`order_product\` (\`id\` bigint unsigned not null auto_increment primary key, \`extra_infos\` varchar(255) null, \`quantity\` int not null, \`product_price\` numeric(10,2) not null, \`total_value\` numeric(10,2) not null, \`product_id\` bigint unsigned not null, \`deleted_at\` datetime null, \`created_at\` datetime not null, \`updated_at\` datetime null) default character set utf8mb4 engine = InnoDB;`,
    );
    this.addSql(
      `alter table \`order_product\` add index \`order_product_product_id_index\`(\`product_id\`);`,
    );

    this.addSql(
      `alter table \`order_product\` add constraint \`order_product_product_id_foreign\` foreign key (\`product_id\`) references \`product\` (\`id\`) on update cascade;`,
    );

    this.addSql(
      `alter table \`product\` modify \`price\` numeric(10,2) not null;`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`order_product\`;`);

    this.addSql(
      `alter table \`product\` modify \`price\` numeric(10,0) not null;`,
    );
  }
}
