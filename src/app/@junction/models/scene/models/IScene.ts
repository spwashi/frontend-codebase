import {ISceneConcept} from './ISceneConcept';
import {IProjectEnvironment} from '../../project/models';

type ISceneName = string;
type ISceneTitle = string;
type ISceneDescription = string;
type ISceneId = number;


export interface IScene {
  id: ISceneId;
  name: ISceneName;
  title?: ISceneTitle;
  description?: ISceneDescription;
  SceneConcept?: ISceneConcept[];
  projectEnvironment?: IProjectEnvironment;
  projectEnvironmentId: IProjectEnvironment['id']
}

export interface ISceneIdentifyingPartial {
  id: ISceneId
}