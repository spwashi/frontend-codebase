import {FeatureRequirement} from '../util';
import {RestrictedCreateSceneForm} from './behaviors/create';
import React from 'react';
import {SceneFeatures} from './Features';
import {SceneDisplayForm} from './components/display/DisplayForm';
import {AllScenesSceneDisplay} from './components/graphql/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '../@tags/Features';
import {UserFeatures} from '../@users/Features';
import {RestrictedEditSceneForm} from './behaviors/edit';
import {AllScenesQuery} from './components/graphql/all/components/FindAll';

export function ScenesControlPanel() {
  return (
    <React.Fragment>
      <UserFeatures/> <SceneFeatures/> <TagFeatures/>
      <nav>
        <ul>
          <li><NavLink to="../scenes">Scene Home</NavLink></li>
          <li><NavLink to="../scenes/all">All Scenes</NavLink></li>
        </ul>
      </nav>
      <FeatureRequirement name="scenes" alternative={'Need Scenes'}>
        <Routes>
          <Route
            path="all"
            element={
              <div style={{width: 500 + 'px'}}>
                <AllScenesSceneDisplay/>
              </div>
            }
          />
          <Route
            path=""
            element={
              <section>
                <AllScenesQuery/>
                <RestrictedCreateSceneForm/>
                <RestrictedEditSceneForm/>
                <FeatureRequirement name="scenes.display" alternative={'Need Scene Display'}>
                  <SceneDisplayForm/>
                </FeatureRequirement>
              </section>
            }
          />
        </Routes>
      </FeatureRequirement>
    </React.Fragment>
  );
}