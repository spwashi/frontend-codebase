import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BACKEND_URL, IS_AUTHENTICATED_URL } from "@core/constants";
import { logout } from "./Logout";
import { useJwt } from "@services/jwt/hooks/useJwt";
import { Feature } from "@services/features/item/components/Feature";
import { featureId__userLoginVerify } from "../../../../../@/featureIds";

/**
 * Checks the current jwt, logging out if the jwt is invalid
 */
export function VerifyLogin() {
  const dispatch = useDispatch();
  const jwt = useJwt();
  useEffect(() => {
    fetch(IS_AUTHENTICATED_URL, {
      method: "POST",
      body: JSON.stringify({ token: jwt }),
      headers: {
        "Content-Type": "application/json",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      if (res.status !== 200) {
        logout(dispatch);
      }
    });
  }, [jwt]);

  return <Feature name={featureId__userLoginVerify} />;
}
