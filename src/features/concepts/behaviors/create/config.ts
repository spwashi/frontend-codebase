import {IUser} from '../../../../app/models/user/models';
import {FormConfig} from '../../../../components/form/Factory';
import {mimeTypeInput, srcInput, titleInput, userInput} from '../../data/config';

export type CreateConceptFormData = {
    username: string;
    user: IUser;
    title: string;
    src: string;
    mimeType: string;
}

interface CreateConceptMutationInput {
    title: string;
    src: string;
    mimeType: string;
    user: { username: string; }
}

export const form__createConcept: FormConfig = {
    id:    'create-concept_form',
    title: 'Create Concept',
    items: [userInput, titleInput, mimeTypeInput, srcInput],
};

export const selectCreateConceptInput =
                 (data: CreateConceptFormData): CreateConceptMutationInput => {
                     const {username, user, title, src, mimeType} = data ?? {};
                     return {
                         title,
                         src,
                         mimeType,
                         user: {username: user?.username ?? username},
                     };
                 };