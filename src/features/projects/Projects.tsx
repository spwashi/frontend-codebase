import {FeatureRequirement} from '../_util';
import React from 'react';
import {ProjectFeatures} from './ProjectFeatures';
import { ProjectDisplay } from './components/display';
import { CreateProjectForm } from './behaviors/create';

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