import {IUser} from '../../../../../.junction/models/user/models';
import {FormConfig} from '../../../../_widgets/form/_features/fields/components/FieldFactory';
import {contentTypeInput, srcInput, titleInput, userInput} from '../../data/config';
import {CreateConceptMutationInput} from '../../../../../.junction/models/concept/behaviors/create';
import {setFieldValue} from '../../../../_widgets/form/_features/fields/util/setFieldValue';
import {makeFieldRequired} from '../../../../_widgets/form/_features/fields/util/makeFieldRequired';

export type CreateConceptFormData = {
  username: string;
  user: IUser;
  title: string;
  src: string;
  contentType: string;
}


export const form__createConcept: FormConfig =
               {
                 formId: 'create-concept_form',
                 title:  'Create Concept',
                 items:
                         [
                           userInput,
                           titleInput,
                           setFieldValue(contentTypeInput, 'text/plain'),
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