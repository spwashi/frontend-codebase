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
import {SceneListQuery} from '../../../services/graphql/all/components/FindAll';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';
import {featureId__sceneDisplay, featureId__scenes} from '../../../../../@/featureIds';

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
      <FeatureRequirement name={featureId__scenes} alternative={'Need Scenes'}>
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
                <SceneListQuery/>
                <LoggedIn>
                  <CreateSceneFormFeature/>
                  <EditSceneFormFeature/>
                </LoggedIn>
                <FeatureRequirement name={featureId__sceneDisplay} alternative={'Need Scene Display'}>
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