import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_tagsSelect} from '../../../../forms';
import {tagsInput} from '@features/tags/data/config/inputs';


export const form__selectTags: IFormConfig = {
  title:  'Select Tags',
  formId: formId_tagsSelect,
  items:  [tagsInput],
}