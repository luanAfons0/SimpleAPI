import { Migration } from '@mikro-orm/migrations';

export class Migration20251031231552 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`order\` modify \`total_discount\` double null default 0, modify \`extra_fee\` double null default 0, modify \`shipping_value\` double null default 0;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`order\` modify \`total_discount\` double not null default 0, modify \`extra_fee\` double not null default 0, modify \`shipping_value\` double not null default 0;`);
  }

}
