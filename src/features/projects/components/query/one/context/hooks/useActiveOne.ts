import {useContext} from 'react';
import {ProjectContext} from '../context';
import {IProject} from '../../../../../../../models/project/models';

export function useActiveProject(): IProject | null {
    const {project = null} = useContext(ProjectContext) ?? {};

    return project ?? null;
}