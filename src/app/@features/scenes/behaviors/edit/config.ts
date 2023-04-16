import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_sceneEdit} from '../../../../@/formIds';
import {sceneDescriptionInput, sceneIdInput, sceneTitleInput} from '@features/scenes/data/config/inputs';

export const form__editScene: IFormConfig = {
  title:  'Edit Scene',
  formId: formId_sceneEdit,
  items:  [
    sceneIdInput,
    sceneDescriptionInput,
    sceneTitleInput,
  ],

}