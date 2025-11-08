import { app } from "../../_server/app";

import dataSource from "../../_server/data-sources/mysql_db_12sini/";

const knex = dataSource.getClient();

const controller = app.defineTableController(
  {},
  {
    removeEntity: async (records) => {
      records.map(async (record) => {
        await knex("order")
          .update({
            deleted_at: new Date(),
          })
          .where("id", record.id);
      });

      return { success: true };
    },
    updateStock: async (records) => {
      records.map(async (record) => {
        try {
          // Get all the related product to be updated
          const productsToBeUpdated = await knex("order_product")
            .where("related_order_id", record.id)
            .select("product_id")
            .select("quantity");

          const filteredQuantity = productsToBeUpdated.reduce((res, curr) => {
            const existing = res.find(
              (item) => item.product_id === curr.product_id,
            );

            if (existing) {
              existing.quantity = +existing.quantity + +curr.quantity;
            } else {
              res.push(curr);
            }

            return res;
          }, []);

          return filteredQuantity.map(async (product) => {
            const productInDb = await knex("product")
              .select("stock")
              .where("id", product.product_id)
              .first();

            // Update the related product stock
            await knex("product")
              .update({
                stock: productInDb.stock - product.quantity,
              })
              .where("id", product.product_id);
          });
        } catch (error) {
          console.log("Error during update stock function");
          console.log(error);
        }
      });

      return { success: true };
    },
  },
);

export default controller;
