import {useTagMutation} from '../mutations/useTagMutation';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {selectTagAdditionInput} from '../selectors/selectTagAdditionInput';
import {FormContextProvider} from '../../../../../components/form/FormContext';
import {UsernameInput} from './input/UsernameInput';
import {ConceptSelect} from '../../../components/Select';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import React from 'react';
import {TagSelect} from '../../../../tags/components/Select';

export function Form() {
    const {send, response} = useTagMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectTagAdditionInput);
    return (
        <section id="form__concept-tag">
            <header>Tag Concept Form</header>
            <FormContextProvider onSubmit={onsubmit}>
                <UsernameInput doSelect/>
                <ConceptSelect formKey="concept"/>
                <TagSelect formKey="tags"/>
                <GraphqlMutationResponse response={response}/>
            </FormContextProvider>
        </section>
    )
}