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

