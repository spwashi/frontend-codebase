import {gql, useMutation} from '@apollo/client';
import {ITag} from '../../../../../../../../app/models/tag/models';
import {IEvent} from '../../../../../../../../app/models/event/models';
import React from 'react';

function useDeleteEventTagMutation() {
  const DELETE_TAG = gql`
      mutation DeleteEventTag($event: EventIdInput!, $tags: [TagReferenceInput]) {
          untagEvent(event: $event, tags: $tags)
      }
  `;

    const [deleteTag, response] = useMutation(DELETE_TAG)
    return deleteTag;
}
export function EventTag({event, tag}: { tag: ITag, event: IEvent }) {
    const {title, domain} = tag;
    const deleteTag       = useDeleteEventTagMutation();

    return (
        <div style={{border: 'thin solid red'}}>
            <button onClick={e => deleteTag({
                                                variables: {
                                                    event: {id: +event.id},
                                                    tags:    [{title, domain}],
                                                },
                                            })}>Remove Tag
            </button>
            <span>{title} {domain}</span>
        </div>
    )
}