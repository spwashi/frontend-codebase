import {FeatureRequirement} from '../_util';
import React from 'react';
import {ProjectFeatures} from './Features';
import { ProjectDisplayForm } from './components/display';
import { CreateProjectForm } from './behaviors/create';

export function ProjectsControlPanel() {
    return <>
        <ProjectFeatures/>
        <FeatureRequirement name="projects">
            <section>
                <CreateProjectForm/>
                <FeatureRequirement name="projects.display">
                    <ProjectDisplayForm/>
                </FeatureRequirement>
            </section>
        </FeatureRequirement>
    </>;
}