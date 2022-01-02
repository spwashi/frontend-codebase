import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../features/old/users/redux/selectors';
import {Feature} from '../util/features';
import React from 'react';
import {selectPossibleProjectsLastFetched, selectPossibleProjectsList} from '../features/old/projects/redux/selectors';

function UserLoginFeature() {
    const lastFetched = useSelector(selectPossibleUsersLastFetched)
    const list        = useSelector(selectPossibleUsersList)
    return <Feature name="users.login" enabled={lastFetched ? !!list.length : false}/>;
}
function UserFeatures() {
    return (
        <Feature name="users">
            <UserLoginFeature/>
            <Feature name="users.signup"/>
        </Feature>
    );
}
function ProjectDisplayFeature() {
    const lastFetched = useSelector(selectPossibleProjectsLastFetched)
    const list        = useSelector(selectPossibleProjectsList)
    return <Feature name="projects.display" enabled={lastFetched ? !!list.length : false}/>;
}
export function ProjectFeatures() {
    return (
        <Feature name="projects">
            <UserFeatures/>
            <ProjectDisplayFeature/>
            <Feature name="files"/>
        </Feature>
    );
}