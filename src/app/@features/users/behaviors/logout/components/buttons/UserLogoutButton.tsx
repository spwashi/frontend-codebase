import { selectLoggedInUser } from "../../../login/redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import classnames from "classnames";
import { appClassnames } from "@core/styles/classNames";
import { logoutUser } from "@features/users/behaviors/logout/helpers/logoutUser";

export function UserLogoutButton() {
  const dispatch = useDispatch();
  const logUserOut = useCallback(() => {
    logoutUser(dispatch);
  }, []);
  const loggedInUser = useSelector(selectLoggedInUser);
  const className = classnames([appClassnames.widgets.user.logout]);
  return loggedInUser ? (
    <button className={className} onClick={logUserOut}>
      Log Out
    </button>
  ) : null;
}
