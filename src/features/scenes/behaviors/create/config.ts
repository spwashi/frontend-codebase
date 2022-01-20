import {FormConfig} from '../../../../components/form/Factory';

export type SelectMutationInputData = {
    name: string;
    title: string;
    description: string;
}


export const form__createScene: FormConfig =
                 {
                     id:
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
                                 title: 'Scene Name',
                                 name:  'name',
                                 type:  'text',
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