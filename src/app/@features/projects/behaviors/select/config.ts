import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { projectInput } from "@features/projects/data/config/inputs";
import { formId__projectSelect } from "@identities/forms/ids";

export const form__selectProject: IFormConfig = {
  title: "Select Project",
  formId: formId__projectSelect,
  items: [projectInput],
};
