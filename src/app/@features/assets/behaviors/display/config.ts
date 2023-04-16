import {loggedInUserInput} from '@features/users/data/config';
import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_userSelectLoggedIn} from '../../../../forms';

export const form__selectLoggedInUser: IFormConfig = {
  title:  'Select User Form',
  formId: formId_userSelectLoggedIn,
  items:  [
    loggedInUserInput,
  ],
}