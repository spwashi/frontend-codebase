import {ProjectFeatures} from '../../../projects/components/Features';
import {FeatureRequirement} from '../../../../_services/features/components/Feature';
import {LoggedIn, NotLoggedIn} from '../login/components/Requirement';
import {VerifyLogin} from '../login/components/VerifyLogin';
import {LogoutButton} from '../login/components/Logout';
import {LoginForm} from '../login/forms/LoginForm';
import {SignupForm} from '../signup/forms/SignupForm';
import React from 'react';
import {UserFeatures} from '../../components/Features';

export function UsersControlPanel() {
  return <>
    {/*Users*/}
    <ProjectFeatures/>
    <UserFeatures/>
    <LogoutButton/>
    <FeatureRequirement name="users" alternative={'Need Users'}>
      <section>
        <FeatureRequirement name="users.login" alternative={'Need User Login'}>
          <LoggedIn>
            <VerifyLogin/>
          </LoggedIn>
          <NotLoggedIn>
            <LoginForm/>
          </NotLoggedIn>
        </FeatureRequirement>
        <FeatureRequirement name="users.signup" alternative={'Need User Signup'}>
          <NotLoggedIn>
            <SignupForm/>
          </NotLoggedIn>
        </FeatureRequirement>
      </section>
    </FeatureRequirement>
  </>;
}