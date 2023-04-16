import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_tagCreate} from '../../../../forms';
import {descriptionInput, domainInput, titleInput, userInput} from '@features/tags/data/config/inputs';
import {makeFieldRequired} from '@widgets/form/features/fields/helpers/makeFieldRequired';

export const form__createTag: IFormConfig = {
  title:  'Create Tag',
  formId: formId_tagCreate,
  items:  [userInput, titleInput, domainInput, descriptionInput].map(makeFieldRequired),
};