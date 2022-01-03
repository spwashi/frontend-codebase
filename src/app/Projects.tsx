import {FeatureRequirement} from '../util/features';
import React from 'react';
import {ProjectFeatures} from './ProjectFeatures';
import { ProjectDisplay } from '../features/projects/components/display';
import { CreateProjectForm } from '../features/projects/behaviors/create';

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