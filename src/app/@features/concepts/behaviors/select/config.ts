import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_conceptSelect} from '../../../../forms';
import {conceptInput} from '@features/concepts/data/config/inputs';

export const form__selectConcept: IFormConfig = {
  title:  'Select Concept',
  formId: formId_conceptSelect,
  items:  [conceptInput],
};