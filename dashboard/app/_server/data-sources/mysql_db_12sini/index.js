import { KnexMysql2Adapter } from '@kottster/server';
import knex from 'knex';

/** 
   * Replace the following with your connection options. 
 * Learn more at https://knexjs.org/guide/#configuration-options
 */
const client = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mypass',
    database: 'lmpflowdb',
  },
});

export default new KnexMysql2Adapter(client);