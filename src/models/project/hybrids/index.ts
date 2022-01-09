import {IProject, IProjectEnvironment} from '../models';

export interface IProjectEnvironment_Complete extends IProjectEnvironment {
    project: IProject;
}
