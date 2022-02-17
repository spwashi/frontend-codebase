import {FeatureRequirement} from '../_util';
import React from 'react';
import {ProjectFeatures} from './Features';
import { ProjectDisplayForm } from './components/display';
import { CreateProjectForm } from './behaviors/create';

export function ProjectsControlPanel() {
    return <>
        <ProjectFeatures/>
        <FeatureRequirement name="projects" alternative={"Need Projects"}>
            <section>
                <CreateProjectForm/>
                <FeatureRequirement name="projects.display" alternative={"Need Project Display"}>
                    <ProjectDisplayForm/>
                </FeatureRequirement>
            </section>
        </FeatureRequirement>
    </>;
}