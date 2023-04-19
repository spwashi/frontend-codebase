import { combineReducers } from "redux";
import { IRootAppState } from "@core/types/IRootAppState";
import { selectUserFeature } from "../../../services/redux/selectors";
import { UserFeatureSignupFeatureState } from "../../../services/redux/types";

export const selectUserSignupFeature = (state: IRootAppState) =>
  selectUserFeature(state).features.signup;
export const signupReducer = combineReducers<UserFeatureSignupFeatureState>({
  enabled: () => false,
  features: () => ({}),
  data: () => ({}),
});
