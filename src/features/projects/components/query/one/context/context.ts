import {createContext} from 'react';
import {IProject} from '../../../../../../models/project/models/IProject';

type IProjectContext = {
    project: IProject | null;
    setProject: (project: IProject) => void;
};
export const ProjectContext = createContext<IProjectContext | null>(null);