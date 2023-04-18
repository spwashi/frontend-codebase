import {gql} from '@apollo/client';

export const gqlNode_SCENE_FINDONE = gql`
    query Scene($id: String!) {
        scene(id: $id) {
            id
            name
            title
            description
        }
    }
`;