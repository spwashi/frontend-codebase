import {IUser} from '@junction/models/user/models';
import {descriptionInput, endInput, eventInput, idInput, startInput, titleInput, userInput} from '../../data/config/inputs';
import {IEvent} from '@junction/models/event/models';
import {EditEventMutationInput} from '@junction/models/event/behaviors/edit';

import {IFormConfig} from '@widgets/form/types/IFormConfig';

export type SelectMutationInputData = {
  user: IUser;
  id: IEvent['id'];
  title: IEvent['title']
  start: IEvent['start']
  end: IEvent['end']
  description: IEvent['description']
}


export const form__editEvent: IFormConfig = {
  formId: 'edit-event-form',
  title:  'Edit Event',
  items:  [
    userInput,
    idInput,
    titleInput,
    startInput,
    endInput,
    descriptionInput,
  ],
};

export const form__selectEvent: IFormConfig = {
  formId: 'select-event-form',
  title:  'Select Event',
  items:  [
    eventInput,
  ],
}

export const selectEditEventInput =
               (data: SelectMutationInputData): EditEventMutationInput => {
                 const {title, start, end, description, id, user} = data ?? {};
                 console.log(data);
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