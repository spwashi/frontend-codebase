import {IProject, IProjectIdentifyingPartial} from '@junction/models/project/models';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {ProjectContext} from '../../../../context/context';

export const gqlQueryNode_PROJECT = gql`
    query Project($id: Int!) {
        project(id: $id) {
            id
            title
            domain
            description
        }
    }
`;

export function OneProjectQuery({id}: IProjectIdentifyingPartial) {
  const context       = useContext(ProjectContext);
  const {data: query} = useQuery(gqlQueryNode_PROJECT, {variables: {id}});
  const {project}     = query ?? {};
  const {setProject}  = context;

  useEffect(() => {
    if (project && setProject) {
      setProject(project as IProject);
    }
  }, [project, setProject]);

  return <>{project?.id} {id} {JSON.stringify(query)}</>
}