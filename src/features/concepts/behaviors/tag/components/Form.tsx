import {useTagMutation} from '../mutation';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__tagConcept, selectTagAdditionInput} from '../config';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import React from 'react';
import {StandardForm} from '../../../../../components/form/Form';

export function TagConceptForm() {
    const {send, response} = useTagMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectTagAdditionInput);
    return (
        <section id="form__concept-tag">
            <StandardForm config={form__tagConcept} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </section>
    )
}