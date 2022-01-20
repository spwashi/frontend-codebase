import {FormConfig} from '../../../../components/form/Factory';

export type SelectMutationInputData = {
    id: string;
    title: string;
    description?: string;
}

export const form__editScene: FormConfig =
                 {
                     id:
                         'edit-scene_form',
                     title:
                         'Edit Scene',
                     items:
                         [
                             {
                                 title: 'ID',
                                 name:  'id',
                                 type:  'value',
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