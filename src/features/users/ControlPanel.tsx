import {ProjectFeatures} from '../projects/Features';
import {FeatureRequirement} from '../_util';
import {LoggedIn, NotLoggedIn} from './behaviors/login/State';
import {VerifyLogin} from './behaviors/login/VerifyLogin';
import {LogoutButton} from './behaviors/login/Logout';
import {LoginForm} from './behaviors/login/forms/LoginForm';
import {SignupForm} from './behaviors/signup/forms/SignupForm';
import React from 'react';
import {UserFeatures} from './Features';

export function UsersControlPanel() {
    return <>
        {/*Users*/}
        <UserFeatures/>
        <ProjectFeatures/>
        <FeatureRequirement name="users">
            <section>
                <FeatureRequirement name="users.login">
                    <LoggedIn>
                        <VerifyLogin/>
                        <LogoutButton/>
                    </LoggedIn>
                    <NotLoggedIn>
                        <LoginForm/>
                    </NotLoggedIn>
                </FeatureRequirement>
                <FeatureRequirement name="users.signup">
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