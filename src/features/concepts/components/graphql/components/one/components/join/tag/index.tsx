import {gql, useMutation} from '@apollo/client';
import {ITag} from '../../../../../../../../../models/tag/models';
import {IConcept} from '../../../../../../../../../models/concept/models';
import React from 'react';

function useDeleteConceptTagMutation() {
  const DELETE_TAG = gql`
      mutation DeleteConceptTag($concept: ConceptIdInput!, $tags: [TagReferenceInput]) {
          untagConcept(concept: $concept, tags: $tags)
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