import {ProjectFeatures} from '../projects/Features';
import {FeatureRequirement} from '../_util';
import {LoggedIn, NotLoggedIn} from './behaviors/login/Requirement';
import {VerifyLogin} from './behaviors/login/VerifyLogin';
import {LogoutButton} from './behaviors/login/Logout';
import {LoginForm} from './behaviors/login/forms/LoginForm';
import {SignupForm} from './behaviors/signup/forms/SignupForm';
import React from 'react';
import {UserFeatures} from './Features';

export function UsersControlPanel() {
    return <>
        {/*Users*/}
        <ProjectFeatures/>
        <UserFeatures/>
        <LogoutButton/>
        <FeatureRequirement name="users" alternative={"Need Users"}>
            <section>
                <FeatureRequirement name="users.login" alternative={"Need User Login"}>
                    <LoggedIn>
                        <VerifyLogin/>
                    </LoggedIn>
                    <NotLoggedIn>
                        <LoginForm/>
                    </NotLoggedIn>
                </FeatureRequirement>
                <FeatureRequirement name="users.signup" alternative={"Need User Signup"}>
                    <NotLoggedIn>
                        <LoggedIn>
                            sdadsd
                        </LoggedIn>
                        <SignupForm/>
                    </NotLoggedIn>
                </FeatureRequirement>
            </section>
        </FeatureRequirement>
    </>;
}