import {IProject, IProjectIdentifyingPartial} from '../../../../../../../junction/models/project/models';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {ProjectContext} from '../context/context';

const PROJECT_QUERY = gql`
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
    const context      = useContext(ProjectContext) ?? ({} as any);
    const {setProject} = context;

    const {data: query} = useQuery(PROJECT_QUERY, {variables: {id}});
    const {project}     = query ?? {};

    useEffect(() => {
        if (project && setProject) {
            setProject(project as IProject);
        }
    }, [project, setProject]);

    return <></>
}