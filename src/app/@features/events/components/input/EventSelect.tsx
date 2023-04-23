import React from "react";
import { SelectInput } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { useEventOptions } from "../../hooks/useEventOptions";

type IEventSelectParams = { formKey: string };

export function EventSelect({ formKey }: IEventSelectParams) {
  const options = useEventOptions();

  return (
    <SelectInput placeholder={"Event"} formKey={formKey} options={options} />
  );
}
