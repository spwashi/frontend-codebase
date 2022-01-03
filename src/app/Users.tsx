import {FeatureRequirement} from '../util/features';
import {LoggedIn, NotLoggedIn} from '../features/users/behaviors/login/State';
import {VerifyLogin} from '../features/users/behaviors/login/VerifyLogin';
import {LogoutButton} from '../features/users/behaviors/login/Logout';
import {LoginForm} from '../features/users/behaviors/login/forms/LoginForm';
import {SignupForm} from '../features/users/behaviors/signup/forms/SignupForm';
import React from 'react';

export function UsersControlPanel() {
    return <>
        {/*Users*/}
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
                        <SignupForm/>
                    </NotLoggedIn>
                </FeatureRequirement>
            </section>
        </FeatureRequirement>
    </>;
}