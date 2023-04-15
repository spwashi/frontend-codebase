import React from 'react';
import {TagFeatures} from '../../../components/Features';
import {CreateTagFormFeature} from '../../create';
import {DisplayTagFormFeature} from '../../../components/display';
import {UserFeatures} from '../../../../users/components/Features';
import {ProjectFeatures} from '../../../../projects/components/Features';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import {tagFeatureName} from '@features/tags/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

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
          <FeatureRequirement name={tagFeatureName} alternative={'Need Tags'}>
            <section>
              <LoggedIn>
                <CreateTagFormFeature/>
                <DisplayTagFormFeature/>
              </LoggedIn>
            </section>
          </FeatureRequirement>
        }/>
      </Routes>
    </>
  );
}