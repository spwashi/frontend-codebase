import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_sceneSelect} from '../../../../forms';

export const form__selectScene: IFormConfig = {
  title:  'Select Scene',
  formId: formId_sceneSelect,
  items:  [{name: 'scene', title: 'Scene', type: 'scene'}],
}