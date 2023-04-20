import { gql } from "@apollo/client";
import { appGql } from "../../../../../../../__generated__";

export const gqlNode_SCENE_FETCH_LIST = appGql(`query FetchSceneList {
  sceneList {
    id
    name
    title
    description
  }
}`);
