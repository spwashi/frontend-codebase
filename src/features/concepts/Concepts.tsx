import {FeatureRequirement} from '../_util';
import {CreateConceptForm} from './behaviors/create';
import {TagConceptForm} from './behaviors/tag';
import React from 'react';
import {ConceptFeatures} from './ConceptFeatures';
import {ConceptDisplayForm} from './components/display';
import {AllConceptsConceptDisplay} from './components/graphql/components/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '../tags/TagFeatures';
import {UserFeatures} from '../../app/Users';
import {EditConceptForm} from './behaviors/edit';

export function ConceptsControlPanel() {
    return <React.Fragment>
        <UserFeatures/>
        <ConceptFeatures/>
        <TagFeatures/>

        <NavLink to="/concepts">Concept Home</NavLink>
        <NavLink to="all">All Concepts</NavLink>
        <FeatureRequirement name="concepts">
            <Routes>
                <Route path={'all'} element={<div style={{width: 500 + 'px'}}><AllConceptsConceptDisplay/></div>}/>
                <Route path="" element={
                    <section>
                        <CreateConceptForm/>
                        <EditConceptForm/>
                        <FeatureRequirement name="concepts.display">
                            <ConceptDisplayForm/>
                            <FeatureRequirement name="tags.display">
                                <TagConceptForm/>
                            </FeatureRequirement>
                        </FeatureRequirement>
                    </section>
                }/>
            </Routes>
        </FeatureRequirement>
    </React.Fragment>;
}