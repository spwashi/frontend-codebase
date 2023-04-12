import {IEvent} from '../models';
import {ITag} from '../../tag/models';

export interface TagEventMutationInput {
  event: { id: IEvent['id'] }
  tags: { id: ITag['id'] }[];
}