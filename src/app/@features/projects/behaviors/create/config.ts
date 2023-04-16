import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_projectCreate} from '../../../../@/formIds';
import {descriptionInput, domainInput, nameInput, titleInput} from '@features/projects/data/config/inputs';

export const form__createProject: IFormConfig  = {
  title:  'Create Project',
  formId: formId_projectCreate,
  items:  [
    titleInput,
    nameInput,
    domainInput,
    descriptionInput,
  ],
}