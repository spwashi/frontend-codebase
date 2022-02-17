import {IUser} from '../../../../app/models/user/models';
import {FormConfig} from '../../../../components/form/field/components/Factory';
import {contentTypeInput, srcInput, titleInput, userInput} from '../../data/config';
import {CreateConceptMutationInput} from '../../../../app/models/concept/behaviors/create';
import {setFieldValue} from '../../../../components/form/field/util/setFieldValue';
import {makeFieldRequired} from '../../../../components/form/field/util/makeFieldRequired';

export type CreateConceptFormData = {
    username: string;
    user: IUser;
    title: string;
    src: string;
    contentType: string;
}


export const form__createConcept: FormConfig =
                 {
                     formId:    'create-concept_form',
                     title: 'Create Concept',
                     items:
                            [
                                userInput,
                                titleInput,
                                setFieldValue(contentTypeInput, 'text/spw'),
                                srcInput,
                            ].map(makeFieldRequired),
                 };

export const selectCreateConceptInput =
                 (data: CreateConceptFormData): CreateConceptMutationInput => {
                     const {user, title, src, contentType} = data ?? {};
                     return {
                         concept: {
                             title,
                             src,
                             contentType,
                         },
                         user:    {
                             id: user?.id,
                         },
                     };
                 };