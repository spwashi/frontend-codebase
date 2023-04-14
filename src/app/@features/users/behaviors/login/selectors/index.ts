import {makeFieldRequired} from '@widgets/form/features/fields/helpers/makeFieldRequired';
import {gql} from '@apollo/client';
import {FormFieldConfig} from '@widgets/form/features/fields/types/fieldConfig';
import {FormConfig} from '@widgets/form/features/fields/types/formConfig';

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