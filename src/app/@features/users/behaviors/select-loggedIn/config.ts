import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__userSelectLoggedIn } from "../../../../@/formIds";
import { maybeLoggedInUserInput } from "@features/users/data/config/inputs";

export const form__selectLoggedInUser: IFormConfig = {
  title: "Select User",
  formId: formId__userSelectLoggedIn,
  items: [maybeLoggedInUserInput],
};
