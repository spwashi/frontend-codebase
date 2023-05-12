import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { tagsInput } from "@features/tags/data/config/inputs";
import { formId__tagsSelect } from "@identities/forms/ids";

export const form__selectTags: IFormConfig = {
  title: "Select Tags",
  formId: formId__tagsSelect,
  items: [tagsInput],
};
