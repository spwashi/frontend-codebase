import {gql, useMutation} from '@apollo/client';
import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';
import {Log} from '../../../../../../components/Log';
import {ACTION_DELETE_ONE_CONCEPT} from '../../../../redux/reducer';
import {DeleteConceptMutationInput} from '../../../../../../app/models/concept/behaviors/delete';

function useDeleteConceptMutation() {
  const DELETE_CONCEPT = gql`
      mutation DeleteConcept($id: String) {
          deleteConcept (concept: {id: $id}) {
              id
          }
      }
  `

    return useMutation(DELETE_CONCEPT);
}
export function DeleteConceptButton({id}: DeleteConceptMutationInput['concept']) {
    const [deleteConcept, {error, data}] = useDeleteConceptMutation();
    const dispatch                       = useDispatch();
    const doDelete                       = useCallback(() => {
        if (error) {
            return;
        }
        deleteConcept({variables: {id}})
            .then(e => {
                dispatch({type: ACTION_DELETE_ONE_CONCEPT, payload: {id} as DeleteConceptMutationInput['concept']})
            });
    }, [id, deleteConcept]);

    return <>
        {
            error
            ? <Log>{{error}}</Log>
            : <button onClick={() => doDelete()}>Delete Concept</button>
        }
    </>
}