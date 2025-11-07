import { Migration } from '@mikro-orm/migrations';

export class Migration20251102020621 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`order_product\` modify \`total_value\` numeric(10,2) not null default 0;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`order_product\` modify \`total_value\` numeric(10,2) not null;`);
  }

}
