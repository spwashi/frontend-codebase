import {gql, useMutation} from '@apollo/client';
import {ITag} from '../../../../../../../../../junction/models/tag/models';
import {IConcept} from '../../../../../../../../../junction/models/concept/models';
import React from 'react';

function useDeleteConceptTagMutation() {
  const DELETE_TAG = gql`
      mutation DeleteConceptTag($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
          untagConcept(concept: $concept, user: $user, tags: $tags) {
              id
              concept {
                  id
              }
              tag {
                  id
              }
          }
      }
  `;

    const [deleteTag, response] = useMutation(DELETE_TAG)
    return deleteTag;
}
export function ConceptTag({concept, tag}: { tag: ITag, concept: IConcept }) {
    const {title, domain} = tag;
    const deleteTag       = useDeleteConceptTagMutation();

    return (
        <div style={{border: 'thin solid red'}}>
            <button onClick={e => deleteTag({
                                                variables: {
                                                    concept: {id: +concept.id},
                                                    tags:    [{title, domain}],
                                                },
                                            })}>Remove Tag
            </button>
            <span>{title} {domain}</span>
        </div>
    )
}