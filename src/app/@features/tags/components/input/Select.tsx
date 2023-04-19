import React from "react";
import { SelectInput } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { useTagOptions } from "../../hooks/useOptions";
import { ListQuery } from "../../services/graphql/list/components/ListQuery";

export function TagSelect({ formKey }: { formKey?: string }) {
  const options = useTagOptions();

  return (
    <React.Fragment>
      <ListQuery />
      <SelectInput
        multiple
        placeholder={"Tag"}
        formKey={formKey ?? ""}
        options={options}
      />
    </React.Fragment>
  );
}
