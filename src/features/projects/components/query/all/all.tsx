import {gql} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleProjectsLastFetched, selectProjectStateKey} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_PROJECTS} from '../../../redux/reducer';
import {useFeatureQuery} from '../../../../_util/hooks/useFeatureQuery';
import {getDomain} from '../../../../../components/form/Factory';


export function AllProjectsQuery() {
  const ALL_PROJECTS_QUERY =
        gql`
            query AllProjects($domain: String) {
                allProjects(domain: $domain) {
                    title
                    name
                    description
                    domain
                    id
                }
            }
        `;
    const projectStateKey  = useSelector(selectProjectStateKey);
    const {data}           = useFeatureQuery(ALL_PROJECTS_QUERY, {domain: getDomain()}, projectStateKey);
    const lastFetched      = useSelector(selectPossibleProjectsLastFetched)
    const dispatch         = useDispatch();
    useEffect(() => {
        dispatch({
                     type:    ACTION_RECEIVE_ALL_PROJECTS,
                     payload: data.allProjects ? data.allProjects : [],
                 })
    }, [data.allProjects]);

    return !lastFetched ? <>Loading...</> : null;
}