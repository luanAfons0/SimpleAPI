import { defineConfig, MySqlDriver } from '@mikro-orm/mysql';
import { resolve } from 'path';

export default defineConfig({
  dbName: process.env.MIKRO_ORM_DB_NAME,
  host: process.env.MIKRO_ORM_DB_HOST,
  user: process.env.MIKRO_ORM_DB_USER,
  password: process.env.MIKRO_ORM_DB_PASSWORD,
  port: Number(process.env.MIKRO_ORM_DB_PORT),
  driver: MySqlDriver,
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  migrations: {
    path: resolve(__dirname, './src/migrations'),
  },
});
