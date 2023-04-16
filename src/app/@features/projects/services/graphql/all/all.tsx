import {gql} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleProjectsLastFetched, selectProjectStateKey} from '../../redux/selectors';
import {ACTION_RECEIVE_ALL_PROJECTS} from '../../redux/reducer';
import {useFeatureQuery} from '@services/features/hooks/useFeatureQuery';
import {getDomain} from '@widgets/form/features/fields/components/FieldFactory';

export const PROJECT_LIST_QUERY = gql`
    query AllProjects($domain: String) {
        projectList(domain: $domain) {
            id
            title
            name
            description
            domain
        }
    }
`;


export function ProjectListQuery() {
  const projectStateKey = useSelector(selectProjectStateKey);
  const {data}          = useFeatureQuery(PROJECT_LIST_QUERY, {domain: getDomain()}, projectStateKey);
  const lastFetched     = useSelector(selectPossibleProjectsLastFetched)
  const dispatch        = useDispatch();
  useEffect(() => {
    dispatch({
               type:    ACTION_RECEIVE_ALL_PROJECTS,
               payload: data.projectList ? data.projectList : [],
             })
  }, [data.projectList]);

  return !lastFetched ? <>Loading...</> : null;
}