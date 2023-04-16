import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_selectSceneForm} from '../../../../forms';

export const form__selectScene: IFormConfig = {
  formId: formId_selectSceneForm,
  title:  'Display Scene',
  items:  [{name: 'scene', title: 'Scene', type: 'scene'}],
}