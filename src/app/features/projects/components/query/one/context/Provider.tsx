import React, {useMemo, useState} from 'react';
import {ProjectContext} from './context';
import {IProject} from '../../../../../../../junction/models/project/models';

export function ProjectContextProvider({children}: { children: any }) {
    const [project, setProject] = useState<IProject | null>(null);
    const context               =
              useMemo(() => ({
                  project: project ?? null,
                  setProject,
              }), [project]);

    return (
        <ProjectContext.Provider value={context}>
            {children}
        </ProjectContext.Provider>
    )
}