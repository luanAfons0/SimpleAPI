import { Migration } from '@mikro-orm/migrations';

export class Migration20251102015834 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`order\` modify \`payment_status\` enum('Pendente', 'Pago', 'Recusado', 'Reembolsado') not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`order\` modify \`payment_status\` enum('Pago', 'Recusado', 'Reembolsado') not null;`);
  }

}
