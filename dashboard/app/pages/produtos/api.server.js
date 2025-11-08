import { app } from "../../_server/app";

import dataSource from "../../_server/data-sources/mysql_db_12sini/";

const knex = dataSource.getClient();

const controller = app.defineTableController(
  {},
  {
    removeEntity: async (records) => {
      records.map(async (record) => {
        await knex("product")
          .update({
            deleted_at: new Date(),
          })
          .where("id", record.id);
      });

      return { success: true };
    },
  },
);

export default controller;
