import {IUser} from '@junction/models/user/models';
import {IConcept} from '@junction/models/concept/models';
import {ITag} from '@junction/models/tag/models';
import {TagConceptMutationInput} from '@junction/models/concept/behaviors/tag';

type TagConceptFormData = {
  username: string;
  user: IUser;
  concept: IConcept;
  tags: ITag[]
}
export const selectTagAdditionInput =
               (data: TagConceptFormData): TagConceptMutationInput => {
                 const {user, concept: {id}, tags} = data ?? {};
                 return {
                   concept: {id},
                   user:    {id: user.id},
                   tags:    tags.map(({id}) => ({id})),
                 };
               };