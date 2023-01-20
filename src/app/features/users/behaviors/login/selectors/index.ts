import {FormConfig, FormFieldConfig} from '../../../../../components/form/field/components/Factory';
import {makeFieldRequired} from '../../../../../components/form/field/util/makeFieldRequired';
import {gql} from '@apollo/client';

export const LOGIN_MUTATION = gql`
    mutation LogIn($user: UserLoginInput,$project: ProjectReferenceInput, $password: PasswordReferenceInput) {
        logIn(user: $user, project: $project, password: $password) {
            jwt
            username
            user {
                id
                name
                username
            }
        }
    }
`;


export function selectLoginInput(data: any) {
    const {
              user: {username} = {username: null},
              password,
              project,
          } = data ?? {};

    return {
        user:     {username},
        password: {password},
        project:  {id: project.id},
    };
}

const userInput: FormFieldConfig = {
    type:        'user',
    name:        'user',
    title:       'User',
    ignoreLogin: true,
};

const passwordInput: FormFieldConfig = {
    type:  'password',
    name:  'password',
    title: 'Password',
};

const projectInput: FormFieldConfig = {
    type:  'project',
    name:  'project',
    title: 'Project',
};

export const form__login: FormConfig =
                 {
                     formId: 'login-form',
                     title:  'Login',
                     items:  [
                                 userInput,
                                 passwordInput,
                                 projectInput,
                             ].map(makeFieldRequired),
                 };