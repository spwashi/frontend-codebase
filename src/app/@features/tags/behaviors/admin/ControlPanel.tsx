import {FeatureRequirement} from '@services/features/components/Feature';
import React from 'react';
import {TagFeatures} from '../../components/Features';
import {RestrictedCreateTagForm} from '../create';
import {TagsDisplayForm} from '../../components/display';
import {UserFeatures} from '../../../users/components/Features';
import {ProjectFeatures} from '../../../projects/components/Features';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import {tagDisplayFeatureName, tagFeatureName} from '@features/tags/features';

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
              <RestrictedCreateTagForm/>
              <FeatureRequirement name={tagDisplayFeatureName} alternative={'Need Tag Display'}>
                <TagsDisplayForm/>
              </FeatureRequirement>
            </section>
          </FeatureRequirement>
        }/>
      </Routes>
    </>
  );
}