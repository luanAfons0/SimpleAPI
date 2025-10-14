import { Migration } from '@mikro-orm/migrations';

export class Migration20250831140834 extends Migration {
  override async up(): Promise<void> {
    this.addSql(`alter table \`client\` add \`deleted_at\` datetime null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`client\` drop column \`deleted_at\`;`);
  }
}
