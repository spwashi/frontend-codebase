import {Feature, FeatureRequirement} from '../features/_util';
import {LoggedIn, NotLoggedIn} from '../features/users/behaviors/login/State';
import {VerifyLogin} from '../features/users/behaviors/login/VerifyLogin';
import {LogoutButton} from '../features/users/behaviors/login/Logout';
import {LoginForm} from '../features/users/behaviors/login/forms/LoginForm';
import {SignupForm} from '../features/users/behaviors/signup/forms/SignupForm';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../features/users/redux/selectors';
import {AllUsersQuery} from '../features/users/components/query/all';

function UserLoginFeature() {
    const lastFetched = useSelector(selectPossibleUsersLastFetched)
    const list        = useSelector(selectPossibleUsersList)
    return <Feature name="users.login" enabled={lastFetched ? !!list.length : false}/>;
}
export function UserFeatures() {
    return (
        <Feature name="users">
            <UserLoginFeature/>
            <Feature name="users.signup"/>
        </Feature>
    );
}

UserFeatures.dependencies = [
    AllUsersQuery,
]

export function UsersControlPanel() {
    return <>
        {/*Users*/}
        <UserFeatures />
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