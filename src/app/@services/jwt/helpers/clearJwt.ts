import Cookie from 'js-cookie';

export function clearJwt() { Cookie.remove('jwt') }