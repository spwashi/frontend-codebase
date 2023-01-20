import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {GraphqlMutationResponse} from '../../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {useSelector} from 'react-redux';
import {selectLoggedInUserName} from '../../../login/redux/reducer';
import {FormConfig} from '../../../../../../components/form/field/components/Factory';
import {FeatureRequirement} from '../../../../../_util';
import {StandardForm} from '../../../../../../components/form/Form';

const SIGNUP_MUTATION = gql`
    mutation SignUp($user: CreateUserInput!, $password: CreatePasswordInput!, $project: ProjectReferenceInput) {
        signUp(user: $user, password: $password, project: $project) {
            user {
                id
                name
                username
            }
        }
    }
`;

function selectMutationInput(data: any) {
    const {name, username, password, passwordConfirm, project} = data ?? {};
    return {
        user:     {name, username},
        password: {password, passwordConfirm},
        project:  {id: project.id},
    };
}

const form__userSignup: FormConfig =
          {
              formId: 'signup-form',
              title:  'Signup Form',
              items:  [
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
            <StandardForm config={form__userSignup} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </React.Fragment>
    )
}
export function SignupForm({}) {
    const loggedInUser = useSelector(selectLoggedInUserName);
    if (loggedInUser) return null;
    return (
        <FeatureRequirement name="projects.display" alternative={'Need Projects'}>
            <ActiveForm/>
        </FeatureRequirement>
    );
}
