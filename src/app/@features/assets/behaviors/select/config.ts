import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { get_assetSelectInput } from "@features/assets/data/config/inputs";
import { formId__assetSelect } from '@/formIds';

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
