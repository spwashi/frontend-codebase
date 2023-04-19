import {useCreateTagMutation} from '@features/tags/services/graphql/one/mutations/create';
import {useDispatch} from 'react-redux';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {ACTION_TAG_CREATED} from '@features/tags/services/redux/reducer';
import {selectCreateTagInput} from '@features/tags/behaviors/create/selectors';
import {FormWidget} from '@widgets/form/FormWidget';
import {form__createTag} from '@features/tags/behaviors/create/config';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import React from 'react';

export function TagCreateForm() {
  const {send, response} = useCreateTagMutation();
  const dispatch         = useDispatch();
  const onsubmit         = useMutationFormSubmitCallback(o => send(o).then((o) => {
    dispatch({type: ACTION_TAG_CREATED});
    return o;
  }), selectCreateTagInput);
  return (
    <section id="form__tag-create">
      <FormWidget config={form__createTag} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </section>
  )
}