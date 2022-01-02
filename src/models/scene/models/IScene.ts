import {ISceneConcept} from './ISceneConcept';

type ISceneName = string;
type ISceneTitle = string;
type ISceneDescription = string;

export interface IScene {
    id: number;
    name: ISceneName;
    title?: ISceneTitle;
    description?: ISceneDescription;
    SceneConcept?: ISceneConcept[]
}