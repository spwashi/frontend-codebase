import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_sceneEdit} from '../../../../forms';

export type SelectMutationInputData = {
  id: string;
  title: string;
  description?: string;
}

export const form__editScene: IFormConfig = {
  title:  'Edit Scene',
  formId: formId_sceneEdit,
  items:  [
    {
      title: 'ID',
      name:  'id',
      type:  'value',
      calc:  (data: any) => data?.concept?.id,
    },
    {
      title: 'Scene Description',
      name:  'description',
      type:  'longtext',
    },
    {
      title: 'Scene Title',
      name:  'title',
      type:  'text',
    },
  ],

}
export function selectEditSceneInput(data: SelectMutationInputData) {
  const {id, description, title} = data ?? {};

  return {
    id,
    description,
    title,
  };
}