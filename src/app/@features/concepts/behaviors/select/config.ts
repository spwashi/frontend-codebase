import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId__conceptSelect} from '../../../../@/formIds';
import {conceptInput} from '@features/concepts/data/config/inputs';

export const form__selectConcept: IFormConfig = {
  title:  'Select Concept',
  formId: formId__conceptSelect,
  items:  [conceptInput],
};