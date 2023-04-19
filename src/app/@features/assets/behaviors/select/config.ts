import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__assetSelect } from "../../../../@/formIds";
import { get_assetSelectInput } from "@features/assets/data/config/inputs";

/**
 * Select an Asset
 */
export function getform__assetSelect(user: { username: string }): IFormConfig {
  return {
    title: "Select Asset",
    formId: formId__assetSelect,
    items: [get_assetSelectInput(user)],
  };
}
