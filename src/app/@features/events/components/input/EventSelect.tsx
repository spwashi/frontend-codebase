import React from "react";
import { SelectInput } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { useEventOptions } from "../../hooks/useOptions";

export function EventSelect({ formKey }: { formKey?: string; value?: string }) {
  const options = useEventOptions();

  return (
    <SelectInput
      placeholder={"Event"}
      formKey={formKey ?? ""}
      options={options}
    />
  );
}
