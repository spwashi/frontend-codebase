import {IProject} from './IProject';

type IProjectEnvironmentName = string;
type IProjectEnvironmentTitle = string;

type IProjectEnvironmentId = number;

export interface IProjectEnvironment {
    id: IProjectEnvironmentId;
    projectId: IProject['id'];
    name: IProjectEnvironmentName;
    title: IProjectEnvironmentTitle;
}