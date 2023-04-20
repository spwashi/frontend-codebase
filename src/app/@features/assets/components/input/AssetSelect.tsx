import React from "react";
import { SelectInput } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { usePossibleAssetOptions } from "@features/assets/hooks/usePossibleAssetOptions";

export function AssetSelect({
  formKey,
  username,
}: {
  formKey?: string;
  username: string;
}) {
  const options = usePossibleAssetOptions(username);
  return (
    <SelectInput placeholder="Asset" formKey={formKey} options={options} />
  );
}
