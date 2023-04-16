import {feature_users, feature_userLogin, feature_userLoginForm, feature_userLoginVerify, feature_userSignup, feature_userSignupForm} from '../../@/featureIds';

export type IUserFeatureNames =
  | typeof feature_users
  | typeof feature_userLogin
  | typeof feature_userSignup
  | typeof feature_userLoginVerify
  | typeof feature_userLoginForm
  | typeof feature_userSignupForm