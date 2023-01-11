import {useContext} from 'react';
import {ProjectContext} from '../context';
import {IProject} from '../../../../../../../app/junction/models/project/models';

export function useActiveProject(): IProject | null {
    const {project = null} = useContext(ProjectContext) ?? {};

    return project ?? null;
}