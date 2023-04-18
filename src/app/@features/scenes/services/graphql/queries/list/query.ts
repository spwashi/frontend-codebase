import {gql} from '@apollo/client';

export const gqlQueryNode_SCENE_LIST = gql`
    query AllScenes {
        sceneList {
            id
            name
            title
            description
        }
    }
`;