import {IProjectEnvironment} from './IProjectEnvironment';

interface HasProjectDescription {description: string;}

interface HasProjectEnvironment {ProjectEnvironment: IProjectEnvironment;}

export interface IProject extends Partial<HasProjectDescription & HasProjectEnvironment> {
    id: number;
    name: string;
    title: string;
    domain: string;
}

export interface IProjectIdentifyingPartial {
    name: string;
}