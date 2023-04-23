import React from "react";
import { SelectInput } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { useSceneOptions } from "../../hooks/useSceneOptions";

type ISceneSelectParams = { formKey?: string };

export function SceneSelect({ formKey }: ISceneSelectParams) {
  const options = useSceneOptions();

  return (
    <SelectInput placeholder={"Scene"} formKey={formKey} options={options} />
  );
}
