export const userFeatureName            = 'feature.users';
export const userSignupFeatureName      = 'feature.user.signup';
export const userSignupFormFeatureName  = 'feature.user.signup.form';
export const userLoginFeatureName       = 'feature.user.login';
export const userLoginFormFeatureName   = 'feature.user.login.form';
export const userLoginVerifyFeatureName = 'feature.user.login.verify';

export type IUserFeatureNames =
  | typeof userFeatureName
  | typeof userLoginFeatureName
  | typeof userSignupFeatureName
  | typeof userLoginVerifyFeatureName
  | typeof userLoginFormFeatureName
  | typeof userSignupFormFeatureName