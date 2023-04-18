import {gql} from '@apollo/client';

export const gqlNode_CONCEPT_FETCH_ONE = gql`
    query Concept($id: String!) {
        concept(id: $id) {
            id
            title
            src
            contentType
            conceptTags {
                tag {
                    title
                    domain
                }
            }
        }
    }
`;