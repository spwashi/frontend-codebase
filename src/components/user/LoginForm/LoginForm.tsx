import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {FormContextProvider, TextInput} from '../../../features/form/FormContext';
import {GraphqlMutationResponse} from '../../../features/graphql/GraphqlMutationResponse';
import {UserSelector} from '../SignupForm/UserSelector';
import {useMutationFormSubmitCallback} from '../../../features/graphql/hooks/UseMutationFormSubmitCallback';

// Define mutation
const LOGIN_MUTATION = gql`
    mutation LogIn($user: UserInput, $password: PasswordInput) {
        logIn(user: $user, password: $password) {
            username
            name
        }
    }
`;

function selectMutationInput(data: any) {
    console.log(data)
    const {username, password} = data ?? {};
    return {
        user:     {username},
        password: {password},
    };
}

function UsernameInput({doSelect = false}: { doSelect?: boolean }) {
    return <>
        {
            doSelect
            ? <UserSelector formKey="username"/>
            : <TextInput formKey="username" placeholder="Username"/>
        }
    </>;
}
export function LogInForm() {
    const [send, response] = useMutation(LOGIN_MUTATION);
    const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
    return (

        <FormContextProvider onSubmit={onsubmit}>
            <UsernameInput doSelect/>
            <TextInput formKey="password" type="password" placeholder="Password"/>
            <button type="submit">submit</button>
            <GraphqlMutationResponse response={response}/>
        </FormContextProvider>
    )
}
