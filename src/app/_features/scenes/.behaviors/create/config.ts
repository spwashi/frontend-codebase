import {FormConfig} from '../../../../_widgets/form/_features/fields/components/FieldFactory';
import {convertToSlug} from '../../../projects/.behaviors/create/selectors';

export type SelectMutationInputData = {
  name: string;
  title: string;
  description: string;
}


export const form__createScene: FormConfig =
               {
                 formId:
                   'create-scene_form',
                 title:
                   'Create Scene',
                 items:
                   [
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