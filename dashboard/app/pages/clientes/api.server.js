import { app } from "../../_server/app";

const controller = app.defineTableController({
  // Validate before inserting a record
  validateRecordBeforeInsert: (values) => {
    console.log(values);

    if (!values.email.includes("@")) {
      throw new Error("Invalid email");
    }

    return true;
  },
});

export default controller;
