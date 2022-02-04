import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ACTION_PROJECT_SELECTED} from '../../redux/reducer';
import {Project} from '../query/one/components/Display';
import {StandardForm} from '../../../../components/form/Form';

export function ProjectDisplayForm({}) {
    const [state, setState] = useState<any | null>();
    const project           = state?.data?.project;
    const dispatch          = useDispatch();
    useEffect(() => {
        project && dispatch({type: ACTION_PROJECT_SELECTED, payload: {project}})
    }, [project, dispatch]);

    return (
        <section>
            <header>Project Display</header>
            <StandardForm onSubmit={setState} form={{
                formId: 'display-project-form',
                items: [{name: 'project', title: 'Project', type: 'project'}],
            }}/>
            {project && <Project project={project}/>}
        </section>
    )
}