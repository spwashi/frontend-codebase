import {CreateSceneFormFeature} from '../../create';
import React from 'react';
import {SceneFeatures} from '../../../components/Features';
import {SceneDisplayForm} from '../../display/components/Form';
import {AllScenesSceneDisplay} from '../../../services/graphql/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '../../../../tags/components/Features';
import {UserFeatures} from '../../../../users/components/Features';
import {EditSceneFormFeature} from '../../edit';
import {AllScenesQuery} from '../../../services/graphql/all/components/FindAll';
import {sceneDisplayFeatureName, sceneFeatureName} from '@features/scenes/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

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
      <FeatureRequirement name={sceneFeatureName} alternative={'Need Scenes'}>
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
              <React.Fragment>
                <AllScenesQuery/>
                <LoggedIn>
                  <CreateSceneFormFeature/>
                  <EditSceneFormFeature/>
                </LoggedIn>
                <FeatureRequirement name={sceneDisplayFeatureName} alternative={'Need Scene Display'}>
                  <SceneDisplayForm/>
                </FeatureRequirement>
              </React.Fragment>
            }
          />
        </Routes>
      </FeatureRequirement>
    </React.Fragment>
  );
}