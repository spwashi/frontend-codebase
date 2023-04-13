import {FormFieldConfig} from '../../../../_widgets/form/_features/fields/types/fieldConfig';

export const tagsInput: FormFieldConfig = {
  title: 'Tags',
  name:  'tags',
  type:  'tags',
}

export const eventInput: FormFieldConfig       = {
  title: 'Event',
  name:  'event',
  type:  'event',
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
  title: 'Event Title',
  name:  'title',
  type:  'text',
};
export const startInput: FormFieldConfig       = {
  title: 'Event Start',
  name:  'start',
  type:  'datetime-local',
};
export const endInput: FormFieldConfig         = {
  title: 'Event End',
  name:  'end',
  type:  'datetime-local',
};
export const descriptionInput: FormFieldConfig = {
  title: 'Event Contents',
  name:  'description',
  type:  'longtext',
};