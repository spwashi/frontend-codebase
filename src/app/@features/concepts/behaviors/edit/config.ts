import {IUser} from '@junction/models/user/models';
import {EditConceptMutationInput} from '@junction/models/concept/behaviors/edit';
import {contentTypeInput, idInput, srcInput, titleInput, userInput} from '../../data/config/inputs';

import {FormConfig} from '@widgets/form/features/fields/types/formConfig';

export type SelectMutationInputData = {
  user: IUser;
  title: string;
  src: string;
  contentType: string;
  id: string;
}

export const form__editConcept: FormConfig = {
  formId: 'edit-concept_form',
  title:  'Edit Concept',
  items:  [
    userInput,
    idInput,
    titleInput,
    contentTypeInput,
    srcInput,
  ],
};

export const selectEditConceptInput =
               (data: SelectMutationInputData): EditConceptMutationInput => {
                 const {title, id, src, contentType} = data ?? {};
                 return {
                   concept: {
                     id,
                     title,
                     src,
                     contentType,
                   },
                 };
               };