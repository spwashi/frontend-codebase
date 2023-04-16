import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId__sceneEdit} from '../../../../@/formIds';
import {sceneDescriptionInput, sceneIdInput, sceneTitleInput} from '@features/scenes/data/config/inputs';

export const form__editScene: IFormConfig = {
  title:  'Edit Scene',
  formId: formId__sceneEdit,
  items:  [
    sceneIdInput,
    sceneDescriptionInput,
    sceneTitleInput,
  ],

}