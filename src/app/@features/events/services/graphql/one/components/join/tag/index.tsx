import {gql, useMutation} from '@apollo/client';
import {ITag} from '@junction/models/tag/models';
import {IEvent} from '@junction/models/event/models';
import React from 'react';

function useDeleteEventTagMutation() {
  const DELETE_TAG = gql`
      mutation DeleteEventTag($event: EventReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
          untagEvent(event: $event, user: $user, tags: $tags) {
              tag {
                  id
              }
              event {
                  id
              }
          }
      }
  `;

  const [deleteTag] = useMutation(DELETE_TAG)
  return deleteTag;
}
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