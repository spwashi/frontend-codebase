import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_sceneCreate} from '../../../../@/formIds';
import {descriptionInput, nameInput, titleInput} from '@features/scenes/data/config/inputs';


export const form__createScene: IFormConfig = {
  title:  'Create Scene',
  formId: formId_sceneCreate,
  items:  [
    titleInput,
    nameInput,
    descriptionInput,
  ],
}
