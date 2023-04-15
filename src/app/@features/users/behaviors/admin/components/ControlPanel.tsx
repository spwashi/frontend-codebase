import {ProjectFeatures} from '../../../../projects/components/Features';
import {LoggedIn} from '../../login/components/Requirement';
import {VerifyLogin} from '../../login/components/VerifyLogin';
import {LogoutButton} from '../../login/components/Logout';
import {LoginForm} from '../../login/forms/LoginForm';
import {SignupForm} from '../../signup/forms/SignupForm';
import React from 'react';
import {UserFeatures} from '../../../components/Features';
import {userFeatureName, userLoginFeatureName, userSignupFeatureName} from '@features/users/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';

export function UsersControlPanel() {
  return <>
    {/*Users*/}
    <ProjectFeatures/>
    <UserFeatures/>
    <LogoutButton/>
    <FeatureRequirement name={userFeatureName} alternative={'Need Users'}>
      <section>
        <FeatureRequirement name={userLoginFeatureName} alternative={'Need User Login'}>
          <LoggedIn>
            <VerifyLogin/>
          </LoggedIn>
          <LoggedIn state={false}>
            <LoginForm/>
          </LoggedIn>
        </FeatureRequirement>
        <FeatureRequirement name={userSignupFeatureName} alternative={'Need User Signup'}>
          <LoggedIn state={false}>
            <SignupForm/>
          </LoggedIn>
        </FeatureRequirement>
      </section>
    </FeatureRequirement>
  </>;
}