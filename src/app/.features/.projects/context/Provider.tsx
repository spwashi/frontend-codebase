import React, {useMemo, useState} from 'react';
import {ProjectContext} from './context';
import {IProject} from '../../../../.junction/models/project/models';
import {useLocalStorage} from '../../../util/hooks/useLocalStorage';

/**
 * Stores the project in Local Storage
 */
export function ProjectCachedContextProvider({children}: { children: any }) {
  const [cachedProject, setCachedProject] = useLocalStorage<IProject | null>('active.project', null);
  const context                           =
          useMemo(() => ({
            project:    cachedProject || null,
            setProject: setCachedProject,
          }), [cachedProject, setCachedProject]);

  return (
    <ProjectContext.Provider value={context}>
      {children}
    </ProjectContext.Provider>
  )
}

/**
 * Stores the project in a state variable
 */
export function ProjectTemporaryContextProvider({children}: { children: any }) {
  const [project, setProject] = useState<IProject | null>(null);

  const context = useMemo(() => ({project: project ?? null, setProject: setProject}), [project]);

  return (
    <ProjectContext.Provider value={context}>
      {children}
    </ProjectContext.Provider>
  )
}