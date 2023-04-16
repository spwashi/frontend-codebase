import {loggedInUserInput} from '@features/users/data/config';
import {IFormConfig} from '@widgets/form/types/IFormConfig';

export const form__selectLoggedInUser: IFormConfig = {
  title:  'Select User Form',
  formId: 'select-user-form',
  items:  [
    loggedInUserInput,
  ],
}