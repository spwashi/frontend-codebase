import {FormFieldConfig} from '../../../../_widgets/form/_features/fields/components/FieldFactory';

import {mimeOptions} from './mimeOptions';

export const tagsInput: FormFieldConfig        = {
  title: 'Tags',
  name:  'tags',
  type:  'tags',
}
export const conceptInput: FormFieldConfig     = {
  title: 'Concept',
  name:  'concept',
  type:  'concept',
};
export const userInput: FormFieldConfig        = {
  title: 'User',
  name:  'user',
  type:  'user',
};
export const idInput: FormFieldConfig          = {
  title: 'ID',
  name:  'id',
  type:  'value',
}
export const titleInput: FormFieldConfig       = {
  title:      'Concept Title',
  name:       'title',
  type:       'text',
  validators: {
    onChange: [
      (v: any) => {
        return v?.data.title === 'boon' ? 'cannot be boon' : true;
      },
    ],
  },
};
export const contentTypeInput: FormFieldConfig = {
  title:   'Content Type',
  name:    'contentType',
  type:    'select',
  options: mimeOptions,
};
export const srcInput: FormFieldConfig         = {
  title:      'Concept Contents',
  name:       'src',
  type:       'content',
  validators: {
    onSubmit: [
      (data: any) => {
        return true;
      },

    ],
  },
};