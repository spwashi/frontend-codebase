import {IUser} from '../../../../../.junction/models/user/models';
import {descriptionInput, endInput, startInput, titleInput, userInput} from '../../data/config/inputs';
import {CreateEventMutationInput} from '../../../../../.junction/models/event/behaviors/create';
import {makeFieldRequired} from '@widgets/form/features/fields/helpers/makeFieldRequired';

import {FormConfig} from '@widgets/form/features/fields/types/formConfig';

export type CreateEventFormData = {
  username: string;
  user: IUser;
  title: string;
  start: string;
  end: string;
  description: string;
}


export const form__createEvent: FormConfig = {
  formId: 'create-event_form',
  title:  'Create Event',
  items:  [
            userInput,
            titleInput,
            startInput,
            endInput,
            descriptionInput,
          ].map(makeFieldRequired),
};

export const selectCreateEventInput =
               (data: CreateEventFormData): CreateEventMutationInput => {
                 const {user, title, start, end, description} = data ?? {};
                 return {
                   event: {
                     title,
                     end,
                     description,
                     start,
                   },
                   user:  {id: user.id},
                 };
               };