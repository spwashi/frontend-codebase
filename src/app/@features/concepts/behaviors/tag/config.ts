import {IUser} from '@junction/models/user/models';
import {IConcept} from '@junction/models/concept/models';
import {ITag} from '@junction/models/tag/models';
import {TagConceptMutationInput} from '@junction/models/concept/behaviors/tag';
import {makeFieldRequired} from '@widgets/form/features/fields/helpers/makeFieldRequired';
import {conceptInput, tagsInput, userInput} from '../../data/config/inputs';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_conceptTag} from '../../../../forms';

type TagConceptFormData = {
  username: string;
  user: IUser;
  concept: IConcept;
  tags: ITag[]
}

export const form__tagConcept: IFormConfig = {
  formId: formId_conceptTag,
  title:  'Tag Concept',
  items:  [
    makeFieldRequired(userInput),
    makeFieldRequired(conceptInput),
    makeFieldRequired(tagsInput),
  ],
};

export const selectTagAdditionInput =
               (data: TagConceptFormData): TagConceptMutationInput => {
                 const {user, concept: {id}, tags} = data ?? {};
                 return {
                   concept: {id},
                   user:    {id: user.id},
                   tags:    tags.map(({id}) => ({id})),
                 };
               };