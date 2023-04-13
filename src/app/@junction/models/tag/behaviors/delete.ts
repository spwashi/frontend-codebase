import {ITag} from '../models';
import {IUser} from '../../user/models';

export type DeleteTagInput = {
  id: ITag['id'];
}

export type DeleteTagMutationInput = {
  tag: DeleteTagInput;
  user: { id: IUser['id'] }
};