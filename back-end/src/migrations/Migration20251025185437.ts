import { Migration } from '@mikro-orm/migrations';

export class Migration20251025185437 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table \`address\` (\`id\` bigint unsigned not null auto_increment primary key, \`street\` varchar(100) not null, \`number\` varchar(45) not null, \`complement\` varchar(100) null, \`neighborhood\` varchar(100) not null, \`city\` varchar(60) not null, \`state\` varchar(50) not null, \`zip_code\` varchar(100) not null, \`client_id\` bigint unsigned not null, \`deleted_at\` datetime null, \`created_at\` datetime not null, \`updated_at\` datetime null) default character set utf8mb4 engine = InnoDB;`,
    );
    this.addSql(
      `alter table \`address\` add index \`address_client_id_index\`(\`client_id\`);`,
    );

    this.addSql(
      `alter table \`address\` add constraint \`address_client_id_foreign\` foreign key (\`client_id\`) references \`client\` (\`id\`) on update cascade;`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`address\`;`);
  }
}
