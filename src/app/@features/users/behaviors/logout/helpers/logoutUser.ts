import { Dispatch } from "redux";
import { ACTION_LOGOUT } from "@features/users/behaviors/login/redux/reducer";
import { PURGE } from "redux-persist";
import { clearJwt } from "@services/jwt/helpers/clearJwt";

export function logoutUser(dispatch: Dispatch<any>) {
  dispatch({ type: ACTION_LOGOUT });
  dispatch({
    type: PURGE,
    result: () => {
      console.log("purged");
    },
  });
  clearJwt();
}
