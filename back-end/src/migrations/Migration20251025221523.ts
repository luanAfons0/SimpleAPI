import { Migration } from '@mikro-orm/migrations';

export class Migration20251025221523 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`client\` modify \`client_type\` enum('Pessoa física', 'Pessoa jurídica') not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`client\` modify \`client_type\` varchar(100) not null;`);
  }

}
