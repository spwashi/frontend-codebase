import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { tagsInput } from "@features/tags/data/config/inputs";
import { formId__eventTag } from '@/formIds';
import { eventInput } from "../../data/config/inputs";


export const form__tagEvent: IFormConfig = {
  title: "Tag Event",
  formId: formId__eventTag,
  items: [eventInput, tagsInput],
};
