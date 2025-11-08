import { TablePage, useCallProcedure } from "@kottster/react";
import { Input } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";

const handleAutocompleteZipCode = async (cep) => {
  if (!cep) return;

  const formatedZipCode = cep.replace(/[^\d]/g, "");
  const url = `https://viacep.com.br/ws/${formatedZipCode}/json/`;

  return (await fetch(url)).json();
};

const formatCep = (value, setValue) => {
  if (!value) return;

  if (value.length == 9) {
    handleAutocompleteZipCode(value).then((zipValues) => {
      setValue("neighborhood", zipValues.bairro);
      setValue("city", zipValues.localidade);
      setValue("state", zipValues.uf);
      setValue("street", zipValues.logradouro);
    });
  }

  return value.replace(/(\d{5})(\d)/, "$1-$2");
};

export default () => {
  const callProcedure = useCallProcedure();

  const handleAddressDelete = (records) => {
    // Show confirmation before calling the server
    modals.openConfirmModal({
      title: "Remoção de endereço:",
      children: `Tem certeza que deseja apagar ${records.length} endereço(s)?`,
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
          label: "Apagar endereço(s)",
          onClick: handleAddressDelete,
        },
      ]}
      columnOverrides={{
        // Add function to auto complete zip code
        zip_code: (column) => ({
          ...column,
          label: "Zip Code",
          fieldInput: {
            type: "custom",
            renderComponent: (params) => {
              const { value, updateFieldValue } = params;

              return (
                <Input
                  value={value}
                  maxLength={9}
                  onChange={(event) => {
                    updateFieldValue(
                      "zip_code",
                      formatCep(event.target.value, updateFieldValue),
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
