import {IUser} from '../../../../../.junction/models/user/models';
import {FormConfig} from '../../../../widgets/form/@fields/components/FieldFactory';
import {descriptionInput, endInput, idInput, startInput, titleInput, userInput} from '../../data/config';
import {IEvent} from '../../../../../.junction/models/event/models';
import {EditEventMutationInput} from '../../../../../.junction/models/event/behaviors/edit';

export type SelectMutationInputData = {
  user: IUser;
  id: IEvent['id'];
  title: IEvent['title']
  start: IEvent['start']
  end: IEvent['end']
  description: IEvent['description']
}


export const form__editEvent: FormConfig = {
  formId: 'edit-event_form',
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