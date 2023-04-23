import { appGql } from '@generated/gql';

export const gqlNode_USER_SIGNUP =
  appGql(`mutation SignUp($user: CreateUserInput!, $password: CreatePasswordInput!, $project: ProjectReferenceInput) {
  signUp(user: $user, password: $password, project: $project) {
    user {
      id
      name
      username
    }
  }
}`);
