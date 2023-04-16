import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId__tagCreate} from '../../../../@/formIds';
import {descriptionInput, domainInput, titleInput, userInput} from '@features/tags/data/config/inputs';
import {makeFieldRequired} from '@widgets/form/features/fields/helpers/makeFieldRequired';

export const form__createTag: IFormConfig = {
  title:  'Create Tag',
  formId: formId__tagCreate,
  items:  [userInput, titleInput, domainInput, descriptionInput].map(makeFieldRequired),
};