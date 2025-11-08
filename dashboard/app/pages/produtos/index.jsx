import { TablePage } from "@kottster/react";
import { notifications } from "@mantine/notifications";

export default () => (
  <TablePage
    customBulkActions={[
      {
        color: "red",
        label: "Apagar produto(s)",
        procedure: "removeEntity",
        onResult: (result) => {
          if (result.success) {
            notifications.show({
              title: "Success",
              message: `O produto foi apagado com sucesso!`,
              color: "green",
            });
          }
        },
      },
    ]}
  />
);
