import {useActiveProject} from '../context/hooks/useActiveOne';
import React from 'react';
import {IProject} from '../../../../../../models/project/models/IProject';

export function ProjectDisplay() {
    const project = useActiveProject();
    if (!project) return null;

    const {title, domain, name, description, id} = project as IProject;
    return (
        <>
            <details open>
                <summary>{title}</summary>
                <section>
                    <div>{title}</div>
                    <div>{description}</div>
                </section>
            </details>
        </>
    )
}