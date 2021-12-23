import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {FormContextProvider, TextInput} from '../../../features/form/FormContext';
import {GraphqlMutationResponse} from '../../../features/graphql/GraphqlMutationResponse';
import {UserSelector} from './UserSelector';
import {useMutationFormSubmitCallback} from '../../../features/graphql/hooks/UseMutationFormSubmitCallback';

const SIGNUP_MUTATION = gql`
    mutation SignUp($user: UserInput, $password: PasswordInput) {
        signUp(user: $user, password: $password) {
            username
            name
        }
    }
`;

function selectMutationInput(data: any) {
    const {name, username, password, passwordConfirm} = data ?? {};
    return {
        user:     {name, username},
        password: {password, passwordConfirm},
    };
}

export function SignupForm() {
    const [send, response] = useMutation(SIGNUP_MUTATION);
    const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
    return (
        <FormContextProvider onSubmit={onsubmit}>
            <TextInput formKey="name" placeholder="Name"/>
            <TextInput formKey="username" placeholder="Username"/>
            <TextInput formKey="password" type="password" placeholder="Password"/>
            <TextInput formKey="passwordConfirm" type="password" placeholder="Confirm Password"/>
            <UserSelector formKey="user"/>
            <button type="submit">submit</button>
            <GraphqlMutationResponse response={response}/>
        </FormContextProvider>
    )
}
