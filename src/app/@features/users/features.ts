import {
  featureId__userLogin,
  featureId__userLoginForm,
  featureId__userLoginVerify,
  featureId__users,
  featureId__userSignup,
  featureId__userSignupForm,
} from "@/features/ids";

export type IUserFeatureNames =
  | typeof featureId__users
  | typeof featureId__userLogin
  | typeof featureId__userSignup
  | typeof featureId__userLoginVerify
  | typeof featureId__userLoginForm
  | typeof featureId__userSignupForm;
