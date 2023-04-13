import {FeatureRequirement} from '../../../../_services/features/components/Feature';
import {CreateConceptForm} from '../create';
import {RestrictedTagConceptForm} from '../tag';
import React from 'react';
import {ConceptFeatures} from '../../components/Features';
import {ConceptDisplayForm} from '../../components/display/DisplayForm';
import {AllConceptsConceptDisplay} from '../../services/graphql/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '../../../tags/components/Features';
import {UserFeatures} from '../../../users/components/Features';
import {RestrictedEditConceptForm} from '../edit';
import {AllConceptsQuery} from '../../services/graphql/all/components/FindAll';
import {AllTagsQuery} from '../../../tags/services/graphql/all';

export function ConceptsControlPanel() {
  return (
    <React.Fragment>
      <UserFeatures/>
      <ConceptFeatures/>
      <TagFeatures/>
      <nav>
        <ul>
          <li><NavLink to="../concepts">Concept Home</NavLink></li>
          <li><NavLink to="../concepts/all">All Concepts</NavLink></li>
        </ul>
      </nav>
      <FeatureRequirement name="concepts" alternative={'Need Concepts'}>
        <Routes>
          <Route path={'all'} element={<div style={{width: 500 + 'px'}}><AllConceptsConceptDisplay/></div>}/>
          <Route path="" element={
            <section>
              <AllConceptsQuery/>
              <CreateConceptForm/>
              <RestrictedEditConceptForm/>
              <FeatureRequirement name="concepts.display" alternative={'Need Concepts Display'}>
                <ConceptDisplayForm/>
                <AllTagsQuery/>
                <FeatureRequirement name="tags.display" alternative={'Need Tags Display'}>
                  <RestrictedTagConceptForm/>
                </FeatureRequirement>
              </FeatureRequirement>
            </section>
          }/>
        </Routes>
      </FeatureRequirement>
    </React.Fragment>
  );
}