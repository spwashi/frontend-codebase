import {FeatureRequirement} from '../_util';
import React from 'react';
import {ProjectFeatures} from './Features';
import {ProjectDisplayForm} from './components/display';
import {CreateProjectForm} from './behaviors/create';
import {AllProjectsQuery} from './components/query/all/all';

export function ProjectsControlPanel() {
    return <>
        <AllProjectsQuery/>
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