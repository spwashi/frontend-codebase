import { makeFieldRequired } from "@widgets/form/features/fields/helpers/makeFieldRequired";
import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__conceptTag } from "@/forms/ids";
import { conceptInput, tagsInput, userInput } from "../../data/config/inputs";

export const form__tagConcept: IFormConfig = {
  title: "Tag Concept",
  formId: formId__conceptTag,
  items: [
    makeFieldRequired(userInput),
    makeFieldRequired(conceptInput),
    makeFieldRequired(tagsInput),
  ],
};
