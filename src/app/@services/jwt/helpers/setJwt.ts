import Cookie from "js-cookie";

export function setJwt(jwt: string) {
  Cookie.set("jwt", jwt);
}
