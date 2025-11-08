import { TablePage } from "@kottster/react";
import { notifications } from "@mantine/notifications";

export default () => (
  <TablePage
    customBulkActions={[
      {
        color: "red",
        label: "Apagar pedido(s)",
        procedure: "removeEntity",
        onResult: (result) => {
          if (result.success) {
            notifications.show({
              title: "Success",
              message: `O pedido foi apagado com sucesso!`,
              color: "green",
            });
          }
        },
      },
      {
        color: "green",
        label: "Atualiza estoque",
        procedure: "updateStock",
        onResult: (result) => {
          if (result.success) {
            notifications.show({
              title: "Success",
              message: `Atualizado o estoque de todos os produtos!`,
              color: "green",
            });
          }
        },
      },
    ]}
  />
);
