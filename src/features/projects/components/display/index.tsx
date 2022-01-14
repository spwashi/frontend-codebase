import React, {useEffect, useState} from 'react';
import {FormContextProvider} from '../../../../components/form/FormContext';
import {Project} from '../query/one';
import {ProjectSelect} from '../Select';
import {useDispatch} from 'react-redux';
import {ACTION_PROJECT_SELECTED} from '../../redux/reducer';

export function ProjectDisplay({}) {
    const [state, setState] = useState<any | null>();
    const title             = state?.data?.project?.name;
    const project           = state?.data?.project;
    const dispatch          = useDispatch();
    useEffect(() => {
        project && dispatch({type: ACTION_PROJECT_SELECTED, payload: {project}})
    }, [project, dispatch]);

    return (
        <section>
            <header>Project Display</header>
            <FormContextProvider onSubmit={setState}>
                <ProjectSelect formKey="project"/>
            </FormContextProvider>
            {title && <Project name={title}/>}
        </section>
    )
}