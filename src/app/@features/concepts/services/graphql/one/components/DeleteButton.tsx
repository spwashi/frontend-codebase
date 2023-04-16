import {gql, useMutation} from '@apollo/client';
import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';
import {Log} from '@core/dev/components/Log';
import {ACTION_DELETE_ONE_CONCEPT} from '../../../redux/reducer';
import {DeleteConceptMutationInput} from '@junction/models/concept/behaviors/delete';

export const DELETE_CONCEPT_MUTATION = gql`
    mutation DeleteConcept($id: String!) {
        deleteConcept (concept: {id: $id}) {
            id
        }
    }
`


function useDeleteConceptMutation() {
  return useMutation(DELETE_CONCEPT_MUTATION);
}

export function DeleteConceptButton({id}: DeleteConceptMutationInput['concept']) {
  const [deleteConcept, {error}] = useDeleteConceptMutation();
  const dispatch                 = useDispatch();
  const doDelete                 = useCallback(() => {
    if (error) {
      return;
    }
    deleteConcept({variables: {id}})
      .then(() => {
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