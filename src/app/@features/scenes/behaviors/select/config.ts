import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { sceneInput } from "@features/scenes/data/config/inputs";
import { formId__sceneSelect } from "@/forms/ids";

export const form__selectScene: IFormConfig = {
  title: "Select Scene",
  formId: formId__sceneSelect,
  items: [sceneInput],
};
