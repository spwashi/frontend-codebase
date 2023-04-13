import {Dispatch} from 'redux';
import {ACTION_LOGOUT, selectLoggedInUser} from './redux/reducer';
import {clearJwt} from '../../../../util/jwt';
import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback} from 'react';
import {PURGE} from 'redux-persist';
import classnames from 'classnames';
import {appClassNames} from '../../../../styles/classNames';

export function logout(dispatch: Dispatch<any>) {
  dispatch({type: ACTION_LOGOUT})
  dispatch({type: PURGE, result: () => {}})
  clearJwt();
}

export function LogoutButton() {
  const dispatch     = useDispatch();
  const logUserOut   = useCallback(() => {
    logout(dispatch);
  }, []);
  const loggedInUser = useSelector(selectLoggedInUser);
  const className    = classnames([appClassNames.widgets.user.logout]);
  return loggedInUser ? <button className={className} onClick={logUserOut}>Log Out</button> : null;
}