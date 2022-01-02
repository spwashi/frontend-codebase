import {FeatureRequirement} from '../util/features';
import {LoggedIn, NotLoggedIn} from '../features/old/users/features/login/State';
import {VerifyLogin} from '../features/old/users/features/login/VerifyLogin';
import {LogoutButton} from '../features/old/users/features/login/Logout';
import {LoginForm} from '../features/old/users/features/login/forms/LoginForm';
import {SignupForm} from '../features/old/users/features/signup/forms/SignupForm';
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