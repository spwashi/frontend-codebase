import {FeatureRequirement} from '../../../../_services/features/components/Feature';
import {UploadAssetForm} from '../upload/components/form/Form';
import {AssetDisplay} from '../../components/display/AssetDisplay';
import React from 'react';
import {UserFeatures} from '../../../users/components/Features';
import {ProjectFeatures} from '../../../projects/components/Features';
import {LoggedIn} from '../../../users/behaviors/login/components/Requirement';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router';

export function AssetsControlPanel() {
  return <>
    <UserFeatures/>
    <ProjectFeatures/>
    <nav>
      <ul>
        <li><NavLink to="../assets">Asset Home</NavLink></li>
        <li><NavLink to="../assets/all">All Assets</NavLink></li>
      </ul>
    </nav>
    <Routes>
      <Route path="all" element={'[unimplemented]'}/>
      <Route path="" element={
        <FeatureRequirement name="users.login" alternative={'Need Users Login'}>
          <FeatureRequirement name="assets" alternative={'Need Assets'}>
            <section>
              <LoggedIn>
                <UploadAssetForm/>
              </LoggedIn>
              <AssetDisplay/>
            </section>
          </FeatureRequirement>
        </FeatureRequirement>
      }/>
    </Routes>
  </>;
}