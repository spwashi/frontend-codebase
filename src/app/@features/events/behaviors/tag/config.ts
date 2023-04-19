import { eventInput } from "../../data/config/inputs";

import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__eventTag } from "../../../../@/formIds";
import { tagsInput } from "@features/tags/data/config/inputs";

export const form__tagEvent: IFormConfig = {
  title: "Tag Event",
  formId: formId__eventTag,
  items: [eventInput, tagsInput],
};
