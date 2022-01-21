import {IUser} from '../../../../models/user/models';
import {FormConfig} from '../../../../components/form/Factory';
import {IConcept} from '../../../../models/concept/models';
import {idInput, mimeTypeInput, srcInput, titleInput, userInput} from '../../data/config';

export type SelectMutationInputData = {
    user: IUser;
    title: string;
    src: string;
    mimeType: string;
    id: number;
}

interface EditConceptMutationInput {
    id: number;
    title: string;
    src: string;
    mimeType: string;
}

export const form__editConcept: FormConfig = {
    id:    'edit-concept_form',
    title: 'Edit Concept',
    items: [userInput, idInput, titleInput, mimeTypeInput, srcInput],
};

export const selectEditConceptInput =
                 (data: SelectMutationInputData): EditConceptMutationInput => {
                     const {title, id, src, mimeType} = data ?? {};
                     return {
                         id,
                         title,
                         src,
                         mimeType,
                     };
                 };