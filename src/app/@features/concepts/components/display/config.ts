import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_selectConceptForm} from '../../../../forms';

export const form__selectConcept: IFormConfig = {
  formId: formId_selectConceptForm,
  title:  'Select Concept',
  items:  [{name: 'concept', title: 'Concept', type: 'concept'}],
};