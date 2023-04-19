import { gql } from "@apollo/client";

export const gqlNode_USER_SIGNUP = gql`
  mutation SignUp(
    $user: CreateUserInput!
    $password: CreatePasswordInput!
    $project: ProjectReferenceInput
  ) {
    signUp(user: $user, password: $password, project: $project) {
      user {
        id
        name
        username
      }
    }
  }
`;