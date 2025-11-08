import { TablePage, useCallProcedure } from "@kottster/react";
import { Input } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";

const formatPhoneNumber = (value) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7)
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;

  if (phoneNumberLength < 11)
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
      2,
      6,
    )}-${phoneNumber.slice(6, 10)}`;

  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
    2,
    7,
  )}-${phoneNumber.slice(7, 11)}`;
};

const formatDocument = (value) => {
  if (!value) return value;

  if (value.length == 11) {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  // Format for CNPJ
  if (value.length == 17) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5");
  }

  return value.replace(/d+/g, "");
};

export default () => {
  const callProcedure = useCallProcedure();

  const handleClientDelete = (records) => {
    // Show confirmation before calling the server
    modals.openConfirmModal({
      title: "Remoção de clientes:",
      children: `Tem certeza que deseja apagar ${records.length} cliente(s)?`,
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
          label: "Apagar cliente(s)",
          onClick: handleClientDelete,
        },
      ]}
      columnOverrides={{
        // Add function to format document
        document: (column) => ({
          ...column,
          label: "Document",
          fieldInput: {
            type: "custom",
            renderComponent: (params) => {
              const { value, updateFieldValue } = params;

              return (
                <Input
                  value={value}
                  maxLength={17}
                  onChange={(event) => {
                    console.log(event.target.value);

                    updateFieldValue(
                      "document",
                      formatDocument(event.target.value),
                    );
                  }}
                />
              );
            },
          },
        }),
        // Add function to format phone number
        phone_number: (column) => ({
          ...column,
          label: "Phone number",
          fieldInput: {
            type: "custom",
            renderComponent: (params) => {
              const { value, updateFieldValue } = params;

              return (
                <Input
                  value={value}
                  onChange={(event) => {
                    updateFieldValue(
                      "phone_number",
                      formatPhoneNumber(event.target.value),
                    );
                  }}
                />
              );
            },
          },
        }),
      }}
    />
  );
};
