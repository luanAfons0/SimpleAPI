import { MySqlDriver } from '@mikro-orm/mysql';
import { Options } from '@mikro-orm/core';
import { resolve } from 'path';

export const databaseConfig: Options = {
  dbName: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  driver: MySqlDriver,
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  migrations: {
    path: resolve(__dirname, './src/migrations'),
  },
};
