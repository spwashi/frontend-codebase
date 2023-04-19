import { IFormConfig } from "@widgets/form/types/IFormConfig";
import {
  contentTypeInput,
  idInput,
  srcInput,
  titleInput,
  userInput,
} from "../../data/config/inputs";

import { formId__conceptEdit } from "../../../../@/formIds";

export const form__editConcept: IFormConfig = {
  title: "Edit Concept",
  formId: formId__conceptEdit,
  items: [userInput, idInput, titleInput, contentTypeInput, srcInput],
};
