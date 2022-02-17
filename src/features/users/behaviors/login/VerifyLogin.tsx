import {useDispatch} from 'react-redux';
import {useJwt} from '../../../../util/jwt';
import {useEffect} from 'react';
import {BACKEND_URL} from '../../../../constants';
import {logout} from './Logout';

export function VerifyLogin() {
    const dispatch = useDispatch();
    const jwt      = useJwt();
    useEffect(() => {
        fetch(BACKEND_URL + '/protected', {
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