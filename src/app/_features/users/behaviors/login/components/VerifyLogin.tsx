import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {BACKEND_URL} from '../../../../../constants';
import {logout} from './Logout';
import {useJwt} from '../../../../../_services/jwt/hooks/useJwt';

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
        console.log(res)
        if (res.status === 200) {
          return;
        }
        logout(dispatch);
      })
  }, [jwt]);

  return null;
}