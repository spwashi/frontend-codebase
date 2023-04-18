import {ITag} from '@junction/models/tag/models';
import {IEvent} from '@junction/models/event/models';
import React from 'react';
import {useDeleteEventTagMutation} from '@features/events/services/graphql/one';

export function EventTag({event, tag}: { tag: ITag, event: IEvent }) {
  const {title, domain} = tag;
  const deleteTag       = useDeleteEventTagMutation();

  return (
    <div>
      <button onClick={() => deleteTag({
                                         variables: {
                                           event: {id: +event.id},
                                           tags:  [{title, domain}],
                                         },
                                       })}>Remove Tag
      </button>
      <span>{title} {domain}</span>
    </div>
  )
}