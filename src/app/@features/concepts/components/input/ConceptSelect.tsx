import React from "react";
import { SelectInput } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { useConceptOptions } from "../../hooks/useConceptOptions";

type IConceptSelectParams = { formKey: string };
export function ConceptSelect({ formKey }: IConceptSelectParams) {
  const options = useConceptOptions();
  return (
    <SelectInput placeholder={"Concept"} formKey={formKey} options={options} />
  );
}
