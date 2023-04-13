import {FormConfig} from '../../../../.widgets/@form/.fields/components/FieldFactory';

export type SelectMutationInputData = {
  id: string;
  title: string;
  description?: string;
}

export const form__editScene: FormConfig =
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