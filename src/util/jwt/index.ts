import Cookie from 'js-cookie';
import {useMemo} from 'react';

export function useJwt() {
    return useMemo(() => Cookie.get('jwt'), []);
}
export function clearJwt() { Cookie.remove('jwt') }
export function setJwt(jwt: string) { Cookie.set('jwt', jwt) }