import React from 'react';
import {TagFeatures} from '../../../components/Features';
import {TagsDisplayFormFeature} from '../../display/components/TagsDisplayFormFeature';
import {UserFeatures} from '@features/users/components/Features';
import {ProjectFeatures} from '@features/projects/components/Features';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {LoginRequirement} from '@features/users/behaviors/login/components/LoginRequirement';
import {featureId__tags} from '../../../../../@/featureIds';
import {TagCreateFormFeature} from '../../create/components/TagCreateFormFeature';

export function TagsControlPanel() {
  return (
    <>
      <TagFeatures/>
      <UserFeatures/>
      <ProjectFeatures/>
      <nav>
        <ul>
          <li><NavLink to="../tags">Tag Home</NavLink></li>
          <li><NavLink to="../tags/all">All Tags</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="all" element={'[unimplemented]'}/>
        <Route path="" element={
          <FeatureRequirement name={featureId__tags} alternative={'Need Tags'}>
            <LoginRequirement>
              <TagCreateFormFeature/>
              <TagsDisplayFormFeature/>
            </LoginRequirement>
          </FeatureRequirement>
        }/>
      </Routes>
    </>
  );
}