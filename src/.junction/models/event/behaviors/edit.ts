import {IEvent} from '../models';
import {IUser} from '../../user/models';

export type EditEventInput = {
  id: IEvent['id'];
  title?: IEvent['title'];
  start?: IEvent['start']
  end?: IEvent['end']
  description?: IEvent['description']
}

export type EditEventMutationInput = {
  event: EditEventInput;
  user: {
    id: IUser['id']
  }
};