import {convertToSlug} from '../../../projects/behaviors/create/selectors';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_sceneCreate} from '../../../../forms';

export type SelectMutationInputData = {
  name: string;
  title: string;
  description: string;
}


export const form__createScene: IFormConfig = {
  title:  'Create Scene',
  formId: formId_sceneCreate,
  items:  [
    {
      title: 'Scene Title',
      name:  'title',
      type:  'text',
    },
    {
      type: 'value',
      name: 'name',
      calc: (data: any) => convertToSlug(data?.title ?? ''),
    },
    {
      title: 'Scene Description',
      name:  'description',
      type:  'longtext',
    },
  ],

}
export function selectCreateSceneInput(data: SelectMutationInputData) {
  const {name, title, description} = data ?? {};

  return {
    description,
    title,
    name,
  };
}