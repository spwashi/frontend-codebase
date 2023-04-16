import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_tagsSelect} from '../../../../forms';

export const form__selectTags: IFormConfig = {
  title:  'Select Tags',
  formId: formId_tagsSelect,
  items:  [{name: 'tags', title: 'Tags', type: 'tags'}],
}