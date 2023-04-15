import {ProjectFeatures} from '../../../projects/components/Features';
import {Feature, FeatureRequirement} from '@services/features/components/Feature';
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
            <Feature name={'usercontrolpanel.users.login.verify'}>
              <VerifyLogin/>
            </Feature>
          </LoggedIn>
          <NotLoggedIn>
            <Feature name={'usercontrolpanel.users.login.form'}>
              <LoginForm/>
            </Feature>
          </NotLoggedIn>
        </FeatureRequirement>
        <FeatureRequirement name="users.signup" alternative={'Need User Signup'}>
          <NotLoggedIn>
            <Feature name={'usercontrolpanel.users.signup.form'}>
              <SignupForm/>
            </Feature>
          </NotLoggedIn>
        </FeatureRequirement>
      </section>
    </FeatureRequirement>
  </>;
}