import {Dispatch} from 'redux';
import {ACTION_LOGOUT} from './redux/reducer';
import {clearJwt} from '../../../../util/jwt';
import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';
import {PURGE} from 'redux-persist';

export function logout(dispatch: Dispatch<any>) {
    dispatch({type: ACTION_LOGOUT})
    dispatch({type: PURGE})
    clearJwt();
}

export function LogoutButton() {
    const dispatch   = useDispatch();
    const logUserOut = useCallback(() => {
        logout(dispatch);
    }, []);
    return <button onClick={logUserOut}>LogOut</button>
}