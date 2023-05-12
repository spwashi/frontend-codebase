import { IFormConfig } from "@widgets/form/types/IFormConfig";
import {
  nameInput,
  passwordConfirmInput,
  passwordInput,
  projectInput,
  usernameInput,
} from "@features/users/data/config/inputs";
import { formId__userSignup } from "@identities/forms/ids";

export const form__userSignup: IFormConfig = {
  title: "Signup",
  formId: formId__userSignup,
  items: [
    nameInput,
    usernameInput,
    passwordInput,
    passwordConfirmInput,
    projectInput,
  ],
};
