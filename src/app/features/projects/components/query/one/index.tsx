import React from 'react';
import {IProjectIdentifyingPartial} from '../../../../../../junction/models/project/models';
import {ProjectContextProvider} from './context/Provider';
import {ActiveProject} from './components/Display';
import {OneProjectQuery} from './components/Query';

/**
 *
 * @param name
 * @constructor
 */
export function ProjectFetcher({id  }: IProjectIdentifyingPartial) {
    if (!id) return null;
    return (
        <ProjectContextProvider>
            <OneProjectQuery id={id}/>
            <ActiveProject/>
        </ProjectContextProvider>
    )
}