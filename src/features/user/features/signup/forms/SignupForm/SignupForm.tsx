import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {FormContextProvider} from '../../../../../../components/form/FormContext';
import {GraphqlMutationResponse} from '../../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {Input} from '../../../../../../components/form/input/text/Input';
import {ProjectSelector} from '../../../../../project/components/ProjectSelector';
import {useSelector} from 'react-redux';
import {selectLoggedInUserName} from '../../../login/redux/reducer';

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
        project:  {name: project},
    };
}

function ActiveForm() {
    const [send, response] = useMutation(SIGNUP_MUTATION);
    const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
    return (
        <section id="form__signup">
            <header>
                Signup Form
            </header>
            <FormContextProvider onSubmit={onsubmit}>
                <Input formKey="name" placeholder="Name"/>
                <Input formKey="username" placeholder="Username"/>
                <Input formKey="password" type="password" placeholder="Password"/>
                <Input formKey="passwordConfirm" type="password" placeholder="Confirm Password"/>
                <ProjectSelector formKey="project"/>
                <button type="submit">submit</button>
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
