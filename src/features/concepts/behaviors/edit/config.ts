import {IUser} from '../../../../app/models/user/models';
import {FormConfig} from '../../../../components/form/field/components/Factory';
import {idInput, mimeTypeInput, srcInput, titleInput, userInput} from '../../data/config';
import {EditConceptMutationInput} from '../../../../app/models/concept/behaviors/edit';

export type SelectMutationInputData = {
    user: IUser;
    title: string;
    src: string;
    mimeType: string;
    id: string;
}

export const form__editConcept: FormConfig = {
    formId:    'edit-concept_form',
    title: 'Edit Concept',
    items: [
        userInput,
        idInput,
        titleInput,
        mimeTypeInput,
        srcInput,
    ],
};

export const selectEditConceptInput =
                 (data: SelectMutationInputData): EditConceptMutationInput => {
                     const {title, id, src, mimeType} = data ?? {};
                     return {
                         concept: {
                             id,
                             title,
                             src,
                             mimeType,
                         },
                     };
                 };