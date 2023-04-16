import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_conceptSelect} from '../../../../forms';

export const form__selectConcept: IFormConfig = {
  title:  'Select Concept',
  formId: formId_conceptSelect,
  items:  [{name: 'concept', title: 'Concept', type: 'concept'}],
};