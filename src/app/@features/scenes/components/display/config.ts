import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_sceneSelect} from '../../../../forms';

export const form__selectScene: IFormConfig = {
  formId: formId_sceneSelect,
  title:  'Display Scene',
  items:  [{name: 'scene', title: 'Scene', type: 'scene'}],
}