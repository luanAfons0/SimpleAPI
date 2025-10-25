import { Migration } from '@mikro-orm/migrations';

export class Migration20251025194604 extends Migration {
  override async up(): Promise<void> {
    this.addSql(`alter table \`client\` modify \`updated_at\` datetime null;`);
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table \`client\` modify \`updated_at\` datetime not null;`,
    );
  }
}
