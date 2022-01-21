import {IProject, IProjectIdentifyingPartial} from '../../../../../../app/models/project/models';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {ProjectContext} from '../context/context';

const PROJECT_QUERY = gql`
    query Project($name: String) {
        project(name: $name) {
            id
            title
            domain
            description
        }
    }
`;

export function OneProjectQuery({name}: IProjectIdentifyingPartial) {
    const context      = useContext(ProjectContext) ?? ({} as any);
    const {setProject} = context;

    const {data: query} = useQuery(PROJECT_QUERY, {variables: {name}});
    const {project}     = query ?? {};

    useEffect(() => {
        if (project && setProject) {
            setProject(project as IProject);
        }
    }, [project, setProject]);

    return <></>
}