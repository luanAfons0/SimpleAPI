import { Migration } from '@mikro-orm/migrations';

export class Migration20251102013458 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`order_product\` drop foreign key if exists \`order_product_order_id_foreign\`;`);

    this.addSql(`alter table \`order_product\` drop index if exists \`order_product_order_id_index\`;`);

    this.addSql(`alter table \`order_product\` change \`order_id\` \`related_order_id\` int unsigned not null;`);
    this.addSql(`alter table \`order_product\` add constraint \`order_product_related_order_id_foreign\` foreign key (\`related_order_id\`) references \`order\` (\`id\`) on update cascade;`);
    this.addSql(`alter table \`order_product\` add index \`order_product_related_order_id_index\`(\`related_order_id\`);`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`order_product\` drop foreign key \`order_product_related_order_id_foreign\`;`);

    this.addSql(`alter table \`order_product\` drop index if exists \`order_product_related_order_id_index\`;`);

    this.addSql(`alter table \`order_product\` change \`related_order_id\` \`order_id\` int unsigned not null;`);
    this.addSql(`alter table \`order_product\` add constraint \`order_product_order_id_foreign\` foreign key (\`order_id\`) references \`order\` (\`id\`) on update cascade;`);
    this.addSql(`alter table \`order_product\` add index \`order_product_order_id_index\`(\`order_id\`);`);
  }

}
