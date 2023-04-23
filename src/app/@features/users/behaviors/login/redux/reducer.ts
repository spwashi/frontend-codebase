import { combineReducers } from "redux";
import { REHYDRATE } from "redux-persist";
import { IRootAppState } from "@core/types/IRootAppState";
import { selectUserFeature } from "../../../services/redux/selectors";
import { UserFeatureLoginFeatureState } from "../../../services/redux/types";

export const ACTION_RECEIVE_LOGIN = "RECEIVE_LOGIN";
export const ACTION_LOGOUT = "LOGOUT";

export const selectUserLoginFeature = (state: IRootAppState) =>
  selectUserFeature(state)?.features?.login;
export const selectLoggedInUserName = (state: IRootAppState) =>
  selectUserLoginFeature(state)?.data?.username;
export const selectLoggedInUser = (state: IRootAppState) =>
  selectUserLoginFeature(state)?.data?.user;
export const loginReducer = combineReducers<UserFeatureLoginFeatureState>({
  enabled: () => true,
  features: () => ({}),
  data: combineReducers({
    user: (state: string | null = null, action: any) => {
      switch (action.type) {
        case ACTION_RECEIVE_LOGIN: {
          const { user } = action.payload;
          return user;
        }
        case ACTION_LOGOUT: {
          return null;
        }
        case REHYDRATE: {
          return selectLoggedInUser(action?.payload) ?? null;
        }
      }
      return state;
    },
    username: (state: string | null = null, action: any) => {
      switch (action.type) {
        case ACTION_RECEIVE_LOGIN: {
          const { username } = action.payload;
          return username;
        }
        case ACTION_LOGOUT: {
          return null;
        }
        case REHYDRATE: {
          return selectLoggedInUserName(action?.payload) ?? null;
        }
      }
      return state;
    },
  }),
});
