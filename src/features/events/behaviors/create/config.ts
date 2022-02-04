import {IUser} from '../../../../app/models/user/models';
import {FormConfig} from '../../../../components/form/field/components/Factory';
import {descriptionInput, endInput, startInput, titleInput, userInput} from '../../data/config';
import {CreateEventMutationInput} from '../../../../app/models/event/behaviors/create';
import {makeFieldRequired} from '../../../../components/form/field/util/makeFieldRequired';

export type CreateEventFormData = {
    username: string;
    user: IUser;
    title: string;
    start: string;
    end: string;
    description: string;
}


export const form__createEvent: FormConfig = {
    formId:    'create-event_form',
    title: 'Create Event',
    items: [
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