import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_conceptSelect} from '../../../../forms';

export const form__selectConcept: IFormConfig = {
  formId: formId_conceptSelect,
  title:  'Select Concept',
  items:  [{name: 'concept', title: 'Concept', type: 'concept'}],
};