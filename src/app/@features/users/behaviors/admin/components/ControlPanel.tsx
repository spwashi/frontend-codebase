import {ProjectFeatures} from '@features/projects/components/Features';
import {LoginRequirement} from '../../login/components/LoginRequirement';
import {VerifyLogin} from '../../login/components/VerifyLogin';
import {LogoutButton} from '../../login/components/Logout';
import React from 'react';
import {UserFeatures} from '../../../components/Features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {featureId__users, featureId__userLogin} from '../../../../../@/featureIds';
import {UserLoginForm} from '../../login/components/UserLoginForm';
import {UserSignupForm} from '../../signup/components/UserSignupForm';

export function UsersControlPanel() {
  return <>
    <ProjectFeatures/>
    <UserFeatures/>
    <FeatureRequirement name={featureId__users} alternative={'Need Users'}>
      <LogoutButton/>
      <FeatureRequirement name={featureId__userLogin} alternative={'Need User Login'}>
        <VerifyLogin/>
        <LoginRequirement state={false}>
          <UserLoginForm/>
          <UserSignupForm/>
        </LoginRequirement>
      </FeatureRequirement>
    </FeatureRequirement>
  </>;
}