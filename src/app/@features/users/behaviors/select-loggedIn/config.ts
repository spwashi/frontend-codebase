import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_userSelectLoggedIn} from '../../../../forms';
import {maybeLoggedInUserInput} from '@features/users/data/inputs';

export const form__selectLoggedInUser: IFormConfig = {
  title:  'Select User',
  formId: formId_userSelectLoggedIn,
  items:  [
    maybeLoggedInUserInput,
  ],
}