import {makeFieldRequired} from '@widgets/form/features/fields/helpers/makeFieldRequired';
import {conceptInput, tagsInput, userInput} from '../../data/config/inputs';
import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_conceptTag} from '../../../../forms';

export const form__tagConcept: IFormConfig = {
  title:  'Tag Concept',
  formId: formId_conceptTag,
  items:  [
    makeFieldRequired(userInput),
    makeFieldRequired(conceptInput),
    makeFieldRequired(tagsInput),
  ],
};