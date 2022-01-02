import {FeatureRequirement} from '../util/features';
import {CreateProjectForm} from '../features/old/projects/features/create/forms/CreateProjectForm';
import {ProjectDisplay} from '../features/old/projects/components/ProjectSelector';
import React from 'react';
import {ProjectFeatures} from './ProjectFeatures';

export function ProjectsControlPanel() {
    return <>
        <ProjectFeatures/>
        <FeatureRequirement name="projects">
            <section>
                <CreateProjectForm/>
                <FeatureRequirement name="projects.display">
                    <ProjectDisplay/>
                </FeatureRequirement>
            </section>
        </FeatureRequirement>
    </>;
}