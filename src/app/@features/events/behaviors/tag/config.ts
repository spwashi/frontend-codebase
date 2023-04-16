import {IEvent} from '@junction/models/event/models';
import {ITag} from '@junction/models/tag/models';
import {eventInput, tagsInput} from '../../data/config/inputs';
import {TagEventMutationInput} from '@junction/models/event/behaviors/tag';

import {IFormConfig} from '@widgets/form/types/IFormConfig';
import {formId_eventTag} from '../../../../forms';

type TagEventFormData = {
  event: IEvent;
  tags: ITag[]
}


export const form__tagEvent: IFormConfig = {
  title:  'Tag Event',
  formId: formId_eventTag,
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