import {createContext} from 'react';
import {IProject} from '../../../../../../models/project/models';

type IProjectContext = {
    project: IProject | null;
    setProject: (project: IProject) => void;
};
export const ProjectContext = createContext<IProjectContext | null>(null);