import {IUser} from '../../../../models/user/models';
import {FormConfig} from '../../../../components/form/Factory';
import {mimeOptions} from '../edit/config';

export type SelectMutationInputData = {
    username: string;
    user: IUser;
    title: string;
    src: string;
    mimeType: string;
}


export const form__createConcept: FormConfig =
                 {
                     id:
                         'create-concept_form',
                     title:
                         'Create Concept',
                     items:
                         [
                             {
                                 title: 'User',
                                 name:  'user',
                                 type:  'user',
                             },
                             {
                                 title: 'Concept Title',
                                 name:  'title',
                                 type:  'text',
                             },
                             {
                                 title:   'Category',
                                 name:    'mimeType',
                                 type:    'select',
                                 options: mimeOptions,
                             },
                             {
                                 title: 'Concept Contents',
                                 name:  'src',
                                 type:  'content',
                             },
                         ],

                 }
export function selectCreateConceptInput(data: SelectMutationInputData) {
    const {username, user, title, src, mimeType} = data ?? {};

    return {
        title,
        src,
        mimeType,
        user: {
            username: user?.username ?? username,
        },
    };
}