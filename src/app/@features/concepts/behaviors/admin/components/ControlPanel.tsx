import {CreateConceptForm} from '../../create';
import {TagConceptFormFeature} from '../../tag';
import React from 'react';
import {ConceptFeatures} from '../../../components/Features';
import {ConceptDisplayForm} from '../../display/components/Form';
import {AllConceptsConceptDisplay} from '../../../services/graphql/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '@features/tags/components/Features';
import {UserFeatures} from '@features/users/components/Features';
import {EditConceptFormFeature} from '../../edit';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';
import {feature_concepts} from '../../../../../@/featureIds';

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
      <FeatureRequirement name={feature_concepts} alternative={'Need Concepts'}>
        <Routes>
          <Route path={'all'} element={<div style={{width: 500 + 'px'}}><AllConceptsConceptDisplay/></div>}/>
          <Route path="" element={
            <LoggedIn>
              <CreateConceptForm/>
              <EditConceptFormFeature/>
              <ConceptDisplayForm/>
              <TagConceptFormFeature/>
            </LoggedIn>
          }/>
        </Routes>
      </FeatureRequirement>
    </React.Fragment>
  );
}