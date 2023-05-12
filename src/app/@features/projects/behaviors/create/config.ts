import { IFormConfig } from "@widgets/form/types/IFormConfig";
import {
  descriptionInput,
  domainInput,
  nameInput,
  titleInput,
} from "@features/projects/data/config/inputs";
import { formId__projectCreate } from "@identities/forms/ids";

export const form__createProject: IFormConfig = {
  title: "Create Project",
  formId: formId__projectCreate,
  items: [titleInput, nameInput, domainInput, descriptionInput],
};
