import {FormFieldConfig} from '@widgets/form/features/fields/types/fieldConfig';

export const anyUserInput: FormFieldConfig           = {
  type:        'user',
  name:        'user',
  title:       'User',
  ignoreLogin: true,
};
export const passwordInput: FormFieldConfig          = {
  type:  'password',
  name:  'password',
  title: 'Password',
};
export const projectInput: FormFieldConfig           = {
  type:   'project',
  name:   'project',
  title:  'Project',
  ignore: false,
};
/**
 * Input does not ignore logged in user
 */
export const maybeLoggedInUserInput: FormFieldConfig = {
  title:       'User',
  name:        'user',
  type:        'user',
  ignoreLogin: false,
};