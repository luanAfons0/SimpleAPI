import { TablePage } from "@kottster/react";
import { Input } from "@mantine/core";
import { notifications } from "@mantine/notifications";

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

export default () => (
  <TablePage
    customBulkActions={[
      {
        color: "red",
        label: "Apagar endereço(s)",
        procedure: "removeEntity",
        onResult: (result) => {
          if (result.success) {
            notifications.show({
              title: "Success",
              message: `O endereço foi apagado com sucesso!`,
              color: "green",
            });
          }
        },
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
