import { useMemo } from "react";
import Cookie from "js-cookie";

export function useJwt() {
  return useMemo(() => Cookie.get("jwt"), []);
}
