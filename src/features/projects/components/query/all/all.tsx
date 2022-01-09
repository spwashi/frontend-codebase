import {gql} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleProjectsLastFetched, selectProjectStateKey} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_PROJECTS} from '../../../redux/reducer';
import {useFeatureQuery} from '../../../../_util/hooks/useFeatureQuery';


function fetchIsCurrent(lastFetched: number | null) {
    return (Date.now() - (lastFetched ?? 0)) < 1000;
}

export function AllProjectsQuery() {
  const ALL_PROJECTS_QUERY =
        gql`
            query AllProjects {
                allProjects {
                    title
                    name
                    description
                    domain
                    id
                }
            }
        `;
    const projectStateKey  = useSelector(selectProjectStateKey);
    const {data}           = useFeatureQuery(ALL_PROJECTS_QUERY, projectStateKey);
    const lastFetched      = useSelector(selectPossibleProjectsLastFetched)
    const dispatch         = useDispatch();
    useEffect(() => {
        const options = data.allProjects ? data.allProjects : [];
        if (fetchIsCurrent(lastFetched) && !options.length) {
            return;
        }
        dispatch({type: ACTION_RECEIVE_ALL_PROJECTS, payload: options})
    }, [data.allProjects]);

    return !fetchIsCurrent(lastFetched) ? <>Loading...</> : null;
}