import {IUser} from '@junction/models/user/models';
import {IEvent} from '@junction/models/event/models';
import {EditEventMutationInput} from '@junction/models/event/behaviors/edit';

export type SelectMutationInputData = {
  user: IUser;
  id: IEvent['id'];
  title: IEvent['title']
  start: IEvent['start']
  end: IEvent['end']
  description: IEvent['description']
}
export const selectEditEventInput = (data: SelectMutationInputData): EditEventMutationInput => {
  const {title, start, end, description, id, user} = data ?? {};
  return {
    event: {
      id,
      title,
      start,
      end,
      description,
    },
    user:  {
      id: user?.id,
    },
  };
};