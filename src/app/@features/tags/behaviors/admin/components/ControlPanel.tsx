import React from 'react';
import {TagFeatures} from '../../../components/Features';
import {CreateTagFormFeature} from '../../create';
import {DisplayTagsFormFeature} from '../../display/components/Form';
import {UserFeatures} from '../../../../users/components/Features';
import {ProjectFeatures} from '../../../../projects/components/Features';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';
import {featureId__tags} from '../../../../../@/featureIds';

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
            <LoggedIn>
              <CreateTagFormFeature/>
              <DisplayTagsFormFeature/>
            </LoggedIn>
          </FeatureRequirement>
        }/>
      </Routes>
    </>
  );
}