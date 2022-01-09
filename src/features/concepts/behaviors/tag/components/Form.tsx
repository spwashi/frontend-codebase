import {useTagMutation} from '../mutations/addTag';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__tagConcept, selectTagAdditionInput} from '../forms/addTag';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import React from 'react';
import {StandardForm} from '../../../../../components/form/Form';

export function Form() {
    const {send, response} = useTagMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectTagAdditionInput);
    return (
        <section id="form__concept-tag">
            <StandardForm form={form__tagConcept} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </section>
    )
}