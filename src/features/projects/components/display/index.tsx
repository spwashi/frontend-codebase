import React, {useState} from 'react';
import {FormContextProvider} from '../../../../components/form/FormContext';
import {Project} from '../query/one';
import {ProjectSelect} from '../Select';

export function ProjectDisplay() {
    const [state, setState] = useState<any | null>();
    const title             = state?.project?.name;
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