import {gql} from '@apollo/client';

export const gqlQueryNode_CONCEPT_LIST = gql`
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