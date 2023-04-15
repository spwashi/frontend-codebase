import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BACKEND_URL} from '@core/constants';
import {logout} from './Logout';
import {useJwt} from '@services/jwt/hooks/useJwt';
import {userLoginVerifyFeatureName} from '@features/users/features';
import {Feature} from '@services/features/components/Feature';

export function VerifyLogin() {
  const dispatch = useDispatch();
  const jwt      = useJwt();
  useEffect(() => {
    fetch(BACKEND_URL + '/current/user/is_authenticated', {
      method:  'POST',
      body:    JSON.stringify({token: jwt}),
      headers: {
        'Content-Type':  'application/json',
        'Pragma':        'no-cache',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => {
        if (res.status !== 200) {
          logout(dispatch);
        }
      })
  }, [jwt]);

  return <Feature name={userLoginVerifyFeatureName}/>;
}