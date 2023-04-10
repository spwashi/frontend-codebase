import {FeatureRequirement} from '../_util';
import React from 'react';
import {TagFeatures} from './Features';
import {RestrictedCreateTagForm} from './behaviors/create';
import {TagsDisplayForm} from './components/display';
import {UserFeatures} from '../users/Features';
import {ProjectFeatures} from '../projects/Features';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router';

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
        <Route path="all" element={"[unimplemented]"}/>
        <Route path="" element={
          <FeatureRequirement name="tags" alternative={'Need Tags'}>
            <section>
              <RestrictedCreateTagForm/>
              <FeatureRequirement name="tags.display" alternative={'Need Tag Display'}>
                <TagsDisplayForm/>
              </FeatureRequirement>
            </section>
          </FeatureRequirement>
        }/>
      </Routes>
    </>
  );
}