import { IFormConfig } from "@widgets/form/types/IFormConfig";
import {
  sceneDescriptionInput,
  sceneIdInput,
  sceneTitleInput,
} from "@features/scenes/data/config/inputs";
import { formId__sceneEdit } from "@identities/forms/ids";

export const form__editScene: IFormConfig = {
  title: "Edit Scene",
  formId: formId__sceneEdit,
  items: [sceneIdInput, sceneDescriptionInput, sceneTitleInput],
};
