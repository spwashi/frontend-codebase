import {IFormConfig} from '@widgets/form/types/IFormConfig';

export type SelectMutationInputData = {
  id: string;
  title: string;
  description?: string;
}

export const form__editScene: IFormConfig =
               {
                 formId:
                   'edit-scene_form',
                 title:
                   'Edit Scene',
                 items:
                   [
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