import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { conceptInput } from "@features/concepts/data/config/inputs";
import { formId__conceptSelect } from "@identities/forms/ids";

export const form__selectConcept: IFormConfig = {
  title: "Select Concept",
  formId: formId__conceptSelect,
  items: [conceptInput],
};
