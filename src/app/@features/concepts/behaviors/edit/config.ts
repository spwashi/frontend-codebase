import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__conceptEdit } from '@/formIds';
import {
  contentTypeInput,
  idInput,
  srcInput,
  titleInput,
  userInput,
} from "../../data/config/inputs";


export const form__editConcept: IFormConfig = {
  title: "Edit Concept",
  formId: formId__conceptEdit,
  items: [userInput, idInput, titleInput, contentTypeInput, srcInput],
};
