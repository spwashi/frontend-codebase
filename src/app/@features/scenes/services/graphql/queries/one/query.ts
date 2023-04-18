import {gql} from '@apollo/client';

export const gqlQueryNode_SCENE = gql`
    query Scene($id: String!) {
        scene(id: $id) {
            id
            name
            title
            description
        }
    }
`;