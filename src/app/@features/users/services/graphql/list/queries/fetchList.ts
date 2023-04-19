import { gql } from "@apollo/client";

export const gqlNode_USER_FETCH_LIST = gql`
  query UserList {
    userList {
      id
      name
      username
    }
  }
`;
