import {gql} from '@apollo/client';

export const gqlNode_CONCEPT_FINDALL = gql`
    query AllConcepts {
        conceptList {
            id
            title
            contentType
            src
            published
        }
    }
`;