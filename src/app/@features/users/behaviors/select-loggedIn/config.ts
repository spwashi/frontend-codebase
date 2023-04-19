import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { maybeLoggedInUserInput } from "@features/users/data/config/inputs";
import { formId__userSelectLoggedIn } from "../../../../@/formIds";

export const form__selectLoggedInUser: IFormConfig = {
  title: "Select User",
  formId: formId__userSelectLoggedIn,
  items: [maybeLoggedInUserInput],
};
