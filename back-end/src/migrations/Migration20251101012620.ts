import { Migration } from '@mikro-orm/migrations';

export class Migration20251101012620 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table \`client\` modify \`document\` varchar(19) not null;`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table \`client\` modify \`document\` varchar(14) not null;`,
    );
  }
}
