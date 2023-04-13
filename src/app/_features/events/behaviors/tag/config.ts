import {IEvent} from '../../../../../.junction/models/event/models';
import {ITag} from '../../../../../.junction/models/tag/models';
import {eventInput, tagsInput} from '../../data/config/inputs';
import {TagEventMutationInput} from '../../../../../.junction/models/event/behaviors/tag';

import {FormConfig} from '../../../../_widgets/form/_features/fields/types/formConfig';

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