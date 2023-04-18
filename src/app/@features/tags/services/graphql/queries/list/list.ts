import {gql} from '@apollo/client';

export const gqlNode_TAG_FINDALL = gql`
    query TagList {
        tagList {
            id
            title
            domain
        }
    }
`;