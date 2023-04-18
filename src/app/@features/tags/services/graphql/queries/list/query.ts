import {gql} from '@apollo/client';

export const gqlQueryNode_TAG_LIST = gql`
    query TagList {
        tagList {
            id
            title
            domain
        }
    }
`;