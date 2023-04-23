import { appGql } from '@generated/gql';

export const gqlNode_SCENE_FETCH_LIST = appGql(`query FetchSceneList {
  sceneList {
    id
    name
    title
    description
  }
}`);
