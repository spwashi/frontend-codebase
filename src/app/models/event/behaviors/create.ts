import {IEvent} from '../models';
import {IUser} from '../../user/models';

export type CreateEventInput = {
    title: IEvent['title'];
    description: IEvent['description'];
    start: IEvent['start'];
    end: IEvent['end'];
};

export type CreateEventMutationInput = {
    event: CreateEventInput;
    user: { id: IUser['id'] }
};