import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {FormContextProvider} from '../../../../../../components/form/FormContext';
import {GraphqlMutationResponse} from '../../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {useSelector} from 'react-redux';
import {selectLoggedInUserName} from '../../../login/redux/reducer';
import {FormBody, FormConfig} from '../../../../../../components/form/Factory';

const SIGNUP_MUTATION = gql`
    mutation SignUp($user: UserInput!, $password: PasswordInput!, $project: ProjectInput) {
        signUp(user: $user, password: $password, project: $project) {
            username
            name
        }
    }
`;

function selectMutationInput(data: any) {
    const {name, username, password, passwordConfirm, project} = data ?? {};
    return {
        user:     {name, username},
        password: {password, passwordConfirm},
        project:  {name: project.name},
    };
}

const form__userSignup: FormConfig[] = [
    {type: 'text', name: 'name', title: 'Name'},
    {type: 'text', name: 'username', title: 'Username'},
    {type: 'password', name: 'password', title: 'Password'},
    {type: 'password', name: 'passwordConfirm', title: 'Confirm Password'},
    {type: 'project', name: 'project', title: 'project'},
];


function ActiveForm() {
    const [send, response] = useMutation(SIGNUP_MUTATION);
    const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
    return (
        <section id="form__signup">
            <header>
                Signup Form
            </header>
            <FormContextProvider onSubmit={onsubmit}>
                <FormBody items={form__userSignup}/>
                <GraphqlMutationResponse response={response}/>
            </FormContextProvider>
        </section>
    )
}
export function SignupForm() {
    const loggedInUser = useSelector(selectLoggedInUserName);
    if (loggedInUser) return null;
    return <ActiveForm/>;
}
