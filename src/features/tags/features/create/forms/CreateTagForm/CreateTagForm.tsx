import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {FormContextProvider} from '../../../../../../components/form/FormContext';
import {GraphqlMutationResponse} from '../../../../../../services/graphql/GraphqlMutationResponse';
import {UserSelector} from '../../../../../users/components/UserSelector';
import {useMutationFormSubmitCallback} from '../../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {Input, Textarea} from '../../../../../../components/form/input/text/Input';
import {SelectInput} from '../../../../../../components/form/input/select/SelectInput';
import {FeatureRequirement} from '../../../../../../util/features';

// Define mutation
const CREATE_TAG = gql`
    mutation CreateTag($title: String!, $src:String, $user: UserInput!) {
        createTag(tag: {author: $user, title: $title, description: $src}) {
            title
        }
    }
`;

function selectMutationInput(data: any) {
    const {username, title, src, mimeType} = data ?? {};
    return {
        title,
        src,
        mimeType,
        user: {username},
    };
}

function UsernameInput({doSelect = false}: { doSelect?: boolean }) {
    return <>
        {
            doSelect
            ? <UserSelector formKey="username"/>
            : <Input formKey="username" placeholder="Username"/>
        }
    </>;
}

function ActiveForm() {
    const [send, response] = useMutation(CREATE_TAG);
    const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
    return (
        <section id="form__tag-create">
            <header>Create Tag Form</header>
            <FormContextProvider onSubmit={onsubmit}>
                <UsernameInput doSelect/>
                <Input formKey="title" placeholder="Tag title"/>
                <Textarea formKey="description" placeholder="Tag contents"/>
                <button type="submit">submit</button>
                <GraphqlMutationResponse response={response}/>
            </FormContextProvider>
        </section>
    )
}

export function CreateTagForm() {
    return (
        <FeatureRequirement name="users.login">
            <ActiveForm/>
        </FeatureRequirement>
    );
}
