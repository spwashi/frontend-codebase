import { IProjectEnvironment } from "../../project/models";
import { ISceneConcept } from "./ISceneConcept";

type ISceneName = string;
type ISceneTitle = string;
type ISceneDescription = string;
type ISceneId = string;

export interface IScene {
  id: ISceneId;
  name: ISceneName;
  title?: ISceneTitle;
  description?: ISceneDescription;
  SceneConcept?: ISceneConcept[];
  projectEnvironment?: IProjectEnvironment;
  projectEnvironmentId: IProjectEnvironment["id"];
}

export interface ISceneIdentifyingPartial {
  id: ISceneId;
}
