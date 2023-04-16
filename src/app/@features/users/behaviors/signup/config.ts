import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_userSignup} from '../../../../forms';

export const form__userSignup: IFormConfig = {
  title:  'Signup',
  formId: formId_userSignup,
  items:  [
    {type: 'text', name: 'name', title: 'Name'},
    {type: 'text', name: 'username', title: 'Username'},
    {type: 'password', name: 'password', title: 'Password'},
    {type: 'password', name: 'passwordConfirm', title: 'Confirm Password'},
    {type: 'project', name: 'project', title: 'project'},
  ],
};