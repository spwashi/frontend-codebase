import { IProjectEnvironment } from "./IProjectEnvironment";

interface HasProjectDescription {
  description: string;
}

interface HasProjectEnvironment {
  ProjectEnvironment: IProjectEnvironment;
}

type IProjectId = string;
type IProjectName = string;
type IProjectTitle = string;
type IProjectDomain = string;

export interface IProject
  extends Partial<HasProjectDescription & HasProjectEnvironment> {
  id: IProjectId;
  name: IProjectName;
  title: IProjectTitle;
  domain: IProjectDomain;
}

export interface IProjectIdentifyingPartial {
  id: IProjectId;
}
