import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_userLogin} from '../../../../@/formIds';
import {anyUserInput, passwordInput, projectInput} from '@features/users/data/config/inputs';
import {makeFieldRequired} from '@widgets/form/features/fields/helpers/makeFieldRequired';

export const form__login: IFormConfig = {
  title:  'Log In',
  formId: formId_userLogin,
  items:  [
            anyUserInput,
            passwordInput,
            projectInput,
          ].map(makeFieldRequired),
};