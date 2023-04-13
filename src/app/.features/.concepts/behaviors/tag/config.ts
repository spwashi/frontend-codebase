import {IUser} from '../../../../../.junction/models/user/models';
import {IConcept} from '../../../../../.junction/models/concept/models';
import {ITag} from '../../../../../.junction/models/tag/models';
import {FormConfig} from '../../../../.widgets/@form/.fields/components/FieldFactory';
import {conceptInput, tagsInput, userInput} from '../../data/config';
import {TagConceptMutationInput} from '../../../../../.junction/models/concept/behaviors/tag';
import {makeFieldRequired} from '../../../../.widgets/@form/.fields/util/makeFieldRequired';

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