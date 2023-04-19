import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__projectSelect } from "../../../../@/formIds";
import { projectInput } from "@features/projects/data/config/inputs";

export const form__selectProject: IFormConfig = {
  title: "Select Project",
  formId: formId__projectSelect,
  items: [projectInput],
};
