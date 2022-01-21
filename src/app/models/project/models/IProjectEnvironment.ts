type IProjectEnvironmentName = string;
type IProjectEnvironmentTitle = string;

export interface IProjectEnvironment {
    id: number;
    projectId: number;
    name: IProjectEnvironmentName;
    title: IProjectEnvironmentTitle;
}