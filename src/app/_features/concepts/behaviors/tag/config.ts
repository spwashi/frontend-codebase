import {IUser} from '../../../../../.junction/models/user/models';
import {IConcept} from '../../../../../.junction/models/concept/models';
import {ITag} from '../../../../../.junction/models/tag/models';
import {TagConceptMutationInput} from '../../../../../.junction/models/concept/behaviors/tag';
import {makeFieldRequired} from '../../../../_widgets/form/_features/fields/helpers/makeFieldRequired';
import {conceptInput, tagsInput, userInput} from '../../data/config/inputs';

import {FormConfig} from '../../../../_widgets/form/_features/fields/types/formConfig';

type TagConceptFormData = {
  username: string;
  user: IUser;
  concept: IConcept;
  tags: ITag[]
}

export const form__tagConcept: FormConfig = {
  formId: 'tag-concept-form',
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