import {ProjectFeatures} from '../../../../projects/components/Features';
import {LoggedIn} from '../../login/components/Requirement';
import {VerifyLogin} from '../../login/components/VerifyLogin';
import {LogoutButton} from '../../login/components/Logout';
import {LoginForm} from '../../login/forms/LoginForm';
import {SignupForm} from '../../signup/forms/SignupForm';
import React from 'react';
import {UserFeatures} from '../../../components/Features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {feature_users, feature_userLogin} from '../../../../../@/featureIds';

export function UsersControlPanel() {
  return <>
    <ProjectFeatures/>
    <UserFeatures/>
    <FeatureRequirement name={feature_users} alternative={'Need Users'}>
      <LogoutButton/>
      <FeatureRequirement name={feature_userLogin} alternative={'Need User Login'}>
        <VerifyLogin/>
        <LoggedIn state={false}>
          <LoginForm/>
          <SignupForm/>
        </LoggedIn>
      </FeatureRequirement>
    </FeatureRequirement>
  </>;
}