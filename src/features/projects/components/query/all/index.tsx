import {gql, useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleProjectsLastFetched} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_PROJECTS} from '../../../redux/reducer';
import {ProjectInput} from '../../../../../../types/graphql/typeDefs';
import {ACTION_GRAPHQL, ACTION_NOGRAPHQL} from '../../../../../redux/reducer';

function projectToOption(project: ProjectInput) {
    return {title: project.title, value: project.title, project};
}

function fetchIsCurrent(lastFetched: number | null) {
    return (Date.now() - (lastFetched ?? 0)) < 1000;
}
function useDispatchGraphqlError(error: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (/Failed to fetch/i.test(error?.message ?? '')) {
            dispatch({type: ACTION_NOGRAPHQL})
            return;
        }
        if (!error) {
            dispatch({type: ACTION_GRAPHQL})
        }
    }, [error]);
}
export function AllProjectsQuery() {
  const ALL_PROJECTS_QUERY          =
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
    const {data: query = {}, error} = useQuery(ALL_PROJECTS_QUERY);
    const dispatch                  = useDispatch();
    useDispatchGraphqlError(error);
    const lastFetched = useSelector(selectPossibleProjectsLastFetched)
    useEffect(() => {
        const options = query.allProjects ? query.allProjects.map(projectToOption) : [];
        if (fetchIsCurrent(lastFetched) && !options.length) {
            return;
        }
        dispatch({type: ACTION_RECEIVE_ALL_PROJECTS, payload: options})
    }, [query.allProjects]);

    return !fetchIsCurrent(lastFetched) ? <>Loading...</> : null;
}