import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../users/redux/selectors';
import {Feature} from '../_util';
import React from 'react';
import {selectPossibleProjectsLastFetched, selectPossibleProjectsList} from './redux/selectors';
import {AllUsersQuery} from '../users/components/query/all';
import {AllProjectsQuery} from './components/query/all/all';




function ProjectDisplayFeature() {
    const lastFetched = useSelector(selectPossibleProjectsLastFetched)
    const list        = useSelector(selectPossibleProjectsList)
    return <Feature name="projects.display" enabled={lastFetched ? !!list.length : false}/>;
}
export function ProjectFeatures() {
    return (
        <Feature name="projects">
            <ProjectDisplayFeature/>
            <Feature name="files"/>
        </Feature>
    );
}

ProjectFeatures.dependencies = [
    AllProjectsQuery
]