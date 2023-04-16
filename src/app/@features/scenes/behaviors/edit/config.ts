import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_editSceneForm} from '../../../../forms';

export type SelectMutationInputData = {
  id: string;
  title: string;
  description?: string;
}

export const form__editScene: IFormConfig = {
  formId: formId_editSceneForm,
  title:  'Edit Scene',
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