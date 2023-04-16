import {UploadAssetForm} from '../../upload/components/form/Form';
import {AssetDisplay} from '../../display/components/AssetDisplay';
import React from 'react';
import {UserFeatures} from '../../../../users/components/Features';
import {ProjectFeatures} from '../../../../projects/components/Features';
import {LoggedIn} from '../../../../users/behaviors/login/components/Requirement';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {feature_assets} from '../../../../../@/featureIds';

export function AssetsControlPanel() {
  return <>
    <UserFeatures/>
    <ProjectFeatures/>
    <FeatureRequirement name={feature_assets} alternative={'Need Assets'}>
      <nav>
        <ul>
          <li><NavLink to="../assets">Asset Home</NavLink></li>
          <li><NavLink to="../assets/all">All Assets</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="all" element={'[unimplemented]'}/>
        <Route path="" element={
          <LoggedIn>
            <UploadAssetForm/>
            <AssetDisplay/>
          </LoggedIn>
        }/>
      </Routes>
    </FeatureRequirement>
  </>;
}