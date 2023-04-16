import {IUser} from '@junction/models/user/models';
import {EditConceptMutationInput} from '@junction/models/concept/behaviors/edit';
import {contentTypeInput, idInput, srcInput, titleInput, userInput} from '../../data/config/inputs';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_conceptEdit} from '../../../../forms';

export type SelectMutationInputData = {
  user: IUser;
  title: string;
  src: string;
  contentType: string;
  id: string;
}

export const form__editConcept: IFormConfig = {
  formId: formId_conceptEdit,
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