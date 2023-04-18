import {gql} from '@apollo/client';

export const gqlNode_SCENE_FINDALL = gql`
    query AllScenes {
        sceneList {
            id
            name
            title
            description
        }
    }
`;