import { Migration } from '@mikro-orm/migrations';

export class Migration20251101212956 extends Migration {
  override async up(): Promise<void> {
    this.addSql(`alter table \`client\` modify \`created_at\` datetime null;`);

    this.addSql(`alter table \`address\` modify \`created_at\` datetime null;`);

    this.addSql(`alter table \`order\` modify \`created_at\` datetime null;`);

    this.addSql(`alter table \`product\` modify \`created_at\` datetime null;`);

    this.addSql(
      `alter table \`order_product\` modify \`created_at\` datetime null;`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table \`client\` modify \`created_at\` datetime not null;`,
    );

    this.addSql(
      `alter table \`address\` modify \`created_at\` datetime not null;`,
    );

    this.addSql(
      `alter table \`order\` modify \`created_at\` datetime not null;`,
    );

    this.addSql(
      `alter table \`product\` modify \`created_at\` datetime not null;`,
    );

    this.addSql(
      `alter table \`order_product\` modify \`created_at\` datetime not null;`,
    );
  }
}
