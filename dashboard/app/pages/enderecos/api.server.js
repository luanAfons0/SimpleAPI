import { app } from "../../_server/app";

import dataSource from "../../_server/data-sources/mysql_db_609ei2/";

const knex = dataSource.getClient();

const controller = app.defineTableController({
  validateRecordBeforeInsert: async (values) => {
    // Validate client document
    console.log("values: ", values);

    const documentExists = await knex("client")
      .where({ document: values.document })
      .first();

    if (documentExists) {
      throw new Error("User with this document already exists.");
    }

    return true;
  },
});

export default controller;
