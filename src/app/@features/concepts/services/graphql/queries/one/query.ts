import {gql} from '@apollo/client';

export const gqlQueryNode_CONCEPT = gql`
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