import {Dispatch} from 'redux';
import {ACTION_LOGOUT} from './redux/reducer';
import {clearJwt} from '../../../../util/jwt';
import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';
import {PURGE} from 'redux-persist';
import './styles/logout/logout-button.scss';
import './styles/logout/logout-button.module.scss';
import styles from './styles/logout/logout-button.module.scss'
import classnames from 'classnames';

export function logout(dispatch: Dispatch<any>) {
    dispatch({type: ACTION_LOGOUT})
    dispatch({type: PURGE, result: () => {}})
    clearJwt();
}

export function LogoutButton() {
    const dispatch   = useDispatch();
    const logUserOut = useCallback(() => {
        logout(dispatch);
    }, []);
    const className  = classnames([styles.logoutButton]);
    return <button className={className} onClick={logUserOut}>LogOut</button>
}