import { makeFieldRequired } from "@widgets/form/features/fields/helpers/makeFieldRequired";
import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { conceptInput, tagsInput, userInput } from "../../data/config/inputs";
import { formId__conceptTag } from '@/formIds';

export const form__tagConcept: IFormConfig = {
  title: "Tag Concept",
  formId: formId__conceptTag,
  items: [
    makeFieldRequired(userInput),
    makeFieldRequired(conceptInput),
    makeFieldRequired(tagsInput),
  ],
};
