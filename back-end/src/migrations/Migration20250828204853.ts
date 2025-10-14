import { Migration } from '@mikro-orm/migrations';

export class Migration20250828204853 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table \`client\` add \`created_at\` datetime not null, add \`updated_at\` datetime not null;`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table \`client\` drop column \`created_at\`, drop column \`updated_at\`;`,
    );
  }
}
