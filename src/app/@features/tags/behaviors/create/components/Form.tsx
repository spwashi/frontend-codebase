import React from 'react';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createTag, selectCreateTagInput} from '../selectors';
import {useCreateTagMutation} from '../mutations';
import {FormWidget} from '@widgets/form/FormWidget';
import {ACTION_TAG_CREATED} from '../../../services/redux/reducer';
import {useDispatch} from 'react-redux';
import {Feature} from '@services/features/item/components/Feature';
import {tagCreateFormFeatureName} from '@features/tags/features';

function InnerForm() {
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

export function CreateTagFormFeature() {
  return (
    <Feature name={tagCreateFormFeatureName}>
      <InnerForm/>
    </Feature>
  );
}
