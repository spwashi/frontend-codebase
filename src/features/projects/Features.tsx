import {useSelector} from 'react-redux';
import {Feature} from '../_util';
import React from 'react';
import {selectPossibleProjectsLastFetched, selectPossibleProjectsList} from './redux/selectors';
import {AllProjectsQuery} from './components/query/all/all';
import {getDomain} from '../../components/form/field/components/Factory';


function ProjectDisplayFeature() {
    const lastFetched = useSelector(selectPossibleProjectsLastFetched)
    const list        = useSelector(selectPossibleProjectsList)
    return <Feature name="projects.display" enabled={lastFetched ? !!list.length : false}/>;
}

function ProjectCreateFeature() {
    const isLocal   = getDomain().split(':')[0] === 'localhost';
    const urlParams = new URLSearchParams(window.location.search);
    const myParam   = +(urlParams.get('createproject') ?? 0) === 1;
    return <Feature name="projects.create" enabled={isLocal || myParam}/>;
}


export function ProjectFeatures() {
    return (
        <Feature name="projects">
            <ProjectDisplayFeature/>
            <ProjectCreateFeature/>
            <Feature name="assets"/>
        </Feature>
    );
}

ProjectFeatures.featureDeps = [
    AllProjectsQuery,
]