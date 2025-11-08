import { app } from "../../_server/app";

import dataSource from "../../_server/data-sources/mysql_db_12sini/";

const knex = dataSource.getClient();

const controller = app.defineTableController(
  {
    validateRecordBeforeInsert: async (values) => {
      // Validate client email
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!regex.test(values.email)) {
        throw new Error("Invalid email");
      }

      const emailExists = await knex("client")
        .where({ email: values.email })
        .first();

      if (emailExists) {
        throw new Error("User with this email already exists.");
      }

      // Validate client document
      const documentExists = await knex("client")
        .where({ document: values.document })
        .first();

      if (documentExists) {
        throw new Error("User with this document already exists.");
      }

      return true;
    },
  },
  {
    removeEntity: async (records) => {
      records.map(async (record) => {
        await knex("client")
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
