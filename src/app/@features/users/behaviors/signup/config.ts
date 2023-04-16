import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_userSignup} from '../../../../@/formIds';
import {nameInput, passwordConfirmInput, passwordInput, projectInput, usernameInput} from '@features/users/data/config/inputs';

export const form__userSignup: IFormConfig = {
  title:  'Signup',
  formId: formId_userSignup,
  items:  [
    nameInput,
    usernameInput,
    passwordInput,
    passwordConfirmInput,
    projectInput,
  ],
};