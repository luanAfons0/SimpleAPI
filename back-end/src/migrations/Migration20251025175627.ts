import { Migration } from '@mikro-orm/migrations';

export class Migration20251025175627 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table \`client\` (\`id\` bigint unsigned not null auto_increment primary key, \`name\` varchar(100) not null, \`client_type\` varchar(100) not null, \`document\` varchar(14) not null, \`email\` varchar(100) not null, \`phone_number\` varchar(15) not null, \`deleted_at\` datetime null, \`created_at\` datetime not null, \`updated_at\` datetime not null) default character set utf8mb4 engine = InnoDB;`,
    );
    this.addSql(
      `alter table \`client\` add unique \`client_document_unique\`(\`document\`);`,
    );
    this.addSql(
      `alter table \`client\` add unique \`client_email_unique\`(\`email\`);`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`client\`;`);
  }
}
