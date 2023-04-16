import {EditConceptMutationInput} from '@junction/models/concept/behaviors/edit';
import {IUser} from '@junction/models/user/models';

export type SelectMutationInputData = {
  user: IUser;
  title: string;
  src: string;
  contentType: string;
  id: string;
}
export const selectEditConceptInput = (data: SelectMutationInputData): EditConceptMutationInput => {
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