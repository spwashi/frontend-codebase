import {FormFieldConfig} from '@widgets/form/features/fields/types/fieldConfig';

export const anyUserInput: FormFieldConfig      = {
  title:       'User',
  name:        'user',
  type:        'user',
  ignoreLogin: true,
};
export const loggedInUserInput: FormFieldConfig = {
  title:       'User',
  name:        'user',
  type:        'user',
  ignoreLogin: false,
};
