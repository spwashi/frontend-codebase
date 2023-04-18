import {gql} from '@apollo/client';

export const gqlNode_USER_FINDALL = gql`
    query UserList {
        userList {
            id
            name
            username
        }
    }
`;