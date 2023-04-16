import {ProjectFeatures} from '../../../../projects/components/Features';
import {LoggedIn} from '../../login/components/Requirement';
import {VerifyLogin} from '../../login/components/VerifyLogin';
import {LogoutButton} from '../../login/components/Logout';
import {LoginForm} from '../../login/forms/LoginForm';
import {SignupForm} from '../../signup/forms/SignupForm';
import React from 'react';
import {UserFeatures} from '../../../components/Features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {featureId__users, featureId__userLogin} from '../../../../../@/featureIds';

export function UsersControlPanel() {
  return <>
    <ProjectFeatures/>
    <UserFeatures/>
    <FeatureRequirement name={featureId__users} alternative={'Need Users'}>
      <LogoutButton/>
      <FeatureRequirement name={featureId__userLogin} alternative={'Need User Login'}>
        <VerifyLogin/>
        <LoggedIn state={false}>
          <LoginForm/>
          <SignupForm/>
        </LoggedIn>
      </FeatureRequirement>
    </FeatureRequirement>
  </>;
}