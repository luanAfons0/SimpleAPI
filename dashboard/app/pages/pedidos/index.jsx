import { TablePage, useCallProcedure } from "@kottster/react";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";

export default () => {
  const callProcedure = useCallProcedure();

  const handleOrderDelete = (records) => {
    // Show confirmation before calling the server
    modals.openConfirmModal({
      title: "Remoção de pedido:",
      children: `Tem certeza que deseja apagar ${records.length} pedido(s)?`,
      labels: { confirm: "Continuar", cancel: "Cancelar" },
      onConfirm: async () => {
        // Manually call the server procedure
        const result = await callProcedure("removeEntity", records);

        if (result.success) {
          notifications.show({
            title: "Success",
            message: `A ação foi realizada com sucesso!`,
            color: "green",
          });
        }
      },
    });
  };

  return (
    <TablePage
      customBulkActions={[
        {
          color: "red",
          label: "Apagar pedido(s)",
          onClick: handleOrderDelete,
        },
        {
          color: "green",
          label: "Atualizar estoque",
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
};
