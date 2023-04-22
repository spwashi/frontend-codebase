import { makeFieldRequired } from "@widgets/form/features/fields/helpers/makeFieldRequired";

import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__eventCreate } from '@/formIds';
import {
  descriptionInput,
  endInput,
  startInput,
  titleInput,
  userInput,
} from "../../data/config/inputs";

export const form__createEvent: IFormConfig = {
  title: "Create Event",
  formId: formId__eventCreate,
  items: [userInput, titleInput, startInput, endInput, descriptionInput].map(
    makeFieldRequired
  ),
};
