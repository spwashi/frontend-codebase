import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_selectTagsForm} from '../../../../forms';

export const form__selectTags: IFormConfig = {
  title:  'Select Tags',
  formId: formId_selectTagsForm,
  items:  [{name: 'tags', title: 'Tags', type: 'tags'}],
}