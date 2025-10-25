import { Migration } from '@mikro-orm/migrations';

export class Migration20251025210732 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table \`product\` (\`id\` bigint unsigned not null auto_increment primary key, \`sku\` varchar(50) not null, \`name\` varchar(100) not null, \`image_url\` varchar(255) null, \`description\` varchar(255) null, \`stock\` int not null, \`price\` numeric(10,0) not null, \`deleted_at\` datetime null, \`created_at\` datetime not null, \`updated_at\` datetime null) default character set utf8mb4 engine = InnoDB;`,
    );
    this.addSql(
      `alter table \`product\` add unique \`product_sku_unique\`(\`sku\`);`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`product\`;`);
  }
}
