import React from 'react';
import {IProjectIdentifyingPartial} from '../../../../../app/models/project/models';
import {ProjectContextProvider} from './context/Provider';
import {ProjectDisplay} from './components/Display';
import {OneProjectQuery} from './components/Query';

/**
 *
 * @param name
 * @constructor
 */
export function Project({name}: IProjectIdentifyingPartial) {
    if (!name) return null;
    return (
        <ProjectContextProvider>
            <OneProjectQuery name={name}/>
            <ProjectDisplay/>
        </ProjectContextProvider>
    )
}