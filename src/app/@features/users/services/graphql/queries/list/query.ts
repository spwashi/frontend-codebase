import {gql} from '@apollo/client';

export const gqlQueryNode_USER_LIST = gql`
    query UserList {
        userList {
            id
            name
            username
        }
    }
`;