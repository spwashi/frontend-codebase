import {ProjectFeatures} from '../../../projects/components/Features';
import {Feature, FeatureRequirement} from '@services/features/components/Feature';
import {LoggedIn, NotLoggedIn} from '../login/components/Requirement';
import {VerifyLogin} from '../login/components/VerifyLogin';
import {LogoutButton} from '../login/components/Logout';
import {LoginForm} from '../login/forms/LoginForm';
import {SignupForm} from '../signup/forms/SignupForm';
import React from 'react';
import {UserFeatures} from '../../components/Features';
import {userFeatureName, userLoginFeatureName, userLoginFormFeatureName, userSignupFeatureName, userSignupFormFeatureName, verifyLoginFeatureName} from '@features/users/features';

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
            <Feature name={verifyLoginFeatureName}>
              <VerifyLogin/>
            </Feature>
          </LoggedIn>
          <NotLoggedIn>
            <Feature name={userLoginFormFeatureName}>
              <LoginForm/>
            </Feature>
          </NotLoggedIn>
        </FeatureRequirement>
        <FeatureRequirement name={userSignupFeatureName} alternative={'Need User Signup'}>
          <NotLoggedIn>
            <Feature name={userSignupFormFeatureName}>
              <SignupForm/>
            </Feature>
          </NotLoggedIn>
        </FeatureRequirement>
      </section>
    </FeatureRequirement>
  </>;
}