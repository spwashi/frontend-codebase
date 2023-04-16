import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_sceneSelect} from '../../../../@/formIds';
import {sceneInput} from '@features/scenes/data/config/inputs';

export const form__selectScene: IFormConfig = {
  title:  'Select Scene',
  formId: formId_sceneSelect,
  items:  [sceneInput],
}