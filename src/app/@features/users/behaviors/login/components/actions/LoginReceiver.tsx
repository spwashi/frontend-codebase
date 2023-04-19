import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { IUser } from "@junction/models/user/models";
import { setJwt } from "@services/jwt/helpers/setJwt";
import { ACTION_RECEIVE_LOGIN } from "@features/users/behaviors/login/redux/reducer";

export function LoginReceiver({
  username,
  user,
  jwt,
}: {
  username: string;
  user: IUser;
  jwt: string;
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!jwt || !username) {
      return;
    }
    setJwt(jwt);
    dispatch({
      type: ACTION_RECEIVE_LOGIN,
      payload: { username, user, jwt },
    });
  }, [jwt, username, dispatch]);
  return <></>;
}
