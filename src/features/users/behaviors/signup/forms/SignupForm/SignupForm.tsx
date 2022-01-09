import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {GraphqlMutationResponse} from '../../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {useSelector} from 'react-redux';
import {selectLoggedInUserName} from '../../../login/redux/reducer';
import {FormConfig} from '../../../../../../components/form/Factory';
import {FeatureRequirement} from '../../../../../_util';
import {StandardForm} from '../../../../../../components/form/Form';

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
        project:  {
            name:   project.name,
            domain: project.domain,
        },
    };
}

const form__userSignup: FormConfig =
          {
              title: 'Signup Form',
              items: [
                  {type: 'text', name: 'name', title: 'Name'},
                  {type: 'text', name: 'username', title: 'Username'},
                  {type: 'password', name: 'password', title: 'Password'},
                  {type: 'password', name: 'passwordConfirm', title: 'Confirm Password'},
                  {type: 'project', name: 'project', title: 'project'},
              ],
          };


function ActiveForm() {
    const [send, response] = useMutation(SIGNUP_MUTATION);
    const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
    return (
        <React.Fragment>
            <StandardForm form={form__userSignup} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </React.Fragment>
    )
}
export function SignupForm({}) {
    const loggedInUser = useSelector(selectLoggedInUserName);
    if (loggedInUser) return null;
    return (
        <FeatureRequirement name="projects">
            <ActiveForm/>
        </FeatureRequirement>
    );
}
