import {FormConfig, FormFieldConfig} from '../../../../../.widgets/@form/.fields/components/FieldFactory';
import {makeFieldRequired} from '../../../../../.widgets/@form/.fields/util/makeFieldRequired';
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
          user:     userStringOrObj,
          username: stringUsername,
          password,
          project,
        }        = data ?? {};
  const username = typeof userStringOrObj === 'string' ? userStringOrObj : userStringOrObj.username;
  return {
    user:     {username: username ?? stringUsername},
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
  type:   'project',
  name:   'project',
  title:  'Project',
  ignore: false,
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