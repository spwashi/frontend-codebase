import Cookie from 'js-cookie';

export function clearJwt() { Cookie.remove('jwt') }
export function setJwt(jwt: string) { Cookie.set('jwt', jwt) }