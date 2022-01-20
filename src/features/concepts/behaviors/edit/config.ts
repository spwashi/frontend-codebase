import {IUser} from '../../../../models/user/models';
import {FormConfig} from '../../../../components/form/Factory';
import {IConcept} from '../../../../models/concept/models';
import {SelectOption} from '../../../../components/form/input/select/SelectInput';

export type SelectMutationInputData = {
    user: IUser;
    concept: IConcept;
    title: string;
    src: string;
    mimeType: string;
}

export const mimeOptions = ['text/plain', 'text/spw', 'text/rich'].map(title => ({
    title,
    value:   title,
    payload: title,
})) as SelectOption[];


export const form__editConcept: FormConfig =
                 {
                     id:
                         'edit-concept_form',
                     title:
                         'Edit Concept',
                     items:
                         [
                             {
                                 title: 'User',
                                 name:  'user',
                                 type:  'user',
                             },
                             {
                                 title: 'ID',
                                 name:  'id',
                                 type:  'value',
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
export function selectEditConceptInput(data: SelectMutationInputData) {
    const {user, concept, src, mimeType} = data ?? {};

    return {
        title: concept.title,
        src,
        mimeType,
        user:  {
            username: user?.username,
        },
    };
}