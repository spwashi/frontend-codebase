import {IFormItemConfig} from '@widgets/form/features/fields/types/fieldConfig';

export const userInput: IFormItemConfig        = {title: 'User', name: 'user', type: 'user'};
export const titleInput: IFormItemConfig       = {title: 'Title', name: 'title', type: 'text'};
export const domainInput: IFormItemConfig      = {title: 'Domain', name: 'domain', type: 'text'};
export const descriptionInput: IFormItemConfig = {title: 'Description', name: 'description', type: 'longtext'};
export const tagsInput: IFormItemConfig = {
  title: 'Tags',
  name:  'tags',
  type:  'tags',
}