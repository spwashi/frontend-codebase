import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId__tagsSelect} from '../../../../@/formIds';
import {tagsInput} from '@features/tags/data/config/inputs';


export const form__selectTags: IFormConfig = {
  title:  'Select Tags',
  formId: formId__tagsSelect,
  items:  [tagsInput],
}