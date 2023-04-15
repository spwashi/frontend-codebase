import {UploadAssetForm} from '../../upload/components/form/Form';
import {AssetDisplay} from '../../../components/display/AssetDisplay';
import React from 'react';
import {UserFeatures} from '../../../../users/components/Features';
import {ProjectFeatures} from '../../../../projects/components/Features';
import {LoggedIn} from '../../../../users/behaviors/login/components/Requirement';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import {assetFeatureName} from '@features/assets/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';

export function AssetsControlPanel() {
  return <>
    <UserFeatures/>
    <ProjectFeatures/>
    <FeatureRequirement name={assetFeatureName} alternative={'Need Assets'}>
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
            <section>
              <UploadAssetForm/>
              <AssetDisplay/>
            </section>
          </LoggedIn>
        }/>
      </Routes>
    </FeatureRequirement>
  </>;
}