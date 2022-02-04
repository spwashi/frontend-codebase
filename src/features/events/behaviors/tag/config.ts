import {IEvent} from '../../../../app/models/event/models';
import {ITag} from '../../../../app/models/tag/models';
import {FormConfig} from '../../../../components/form/field/components/Factory';
import {eventInput, tagsInput} from '../../data/config';
import {TagEventMutationInput} from '../../../../app/models/event/behaviors/tag';

type TagEventFormData = {
    event: IEvent;
    tags: ITag[]
}


export const form__tagEvent: FormConfig = {
    formId: 'tag-event-form',
    title:  'Tag Event',
    items:  [
        eventInput,
        tagsInput,
    ],
};

export const selectTagAdditionInput =
                 (data: TagEventFormData): TagEventMutationInput => {
                     const {event: {id}, tags} = data ?? {};
                     return {
                         event: {id},
                         tags:  tags.map(({id}) => ({id})),
                     };
                 };