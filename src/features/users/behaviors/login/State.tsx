import {useSelector} from 'react-redux';
import {selectLoggedInUserName} from './redux/reducer';
import React from 'react';
import {Log} from '../../../../components/Log';

export const LoggedIn    = ({children, state = true}: { children: any, state?: boolean }) => {
    const loggedInUser = useSelector(selectLoggedInUserName);
    if (!!loggedInUser !== state) return null;
    if (!!loggedInUser !== state) return <Log>{loggedInUser}</Log>;
    return children;
}
export const NotLoggedIn = ({children}: { children: any }) => {
    return <LoggedIn state={false}>{children}</LoggedIn>
}