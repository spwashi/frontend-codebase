export const preloginAdminRoutesFeatureName  = 'feature.admin.routes[pre-login]';
export const postLoginAdminRoutesFeatureName = 'feature.admin.routes';


export type IAdminFeatureNames =
  | typeof preloginAdminRoutesFeatureName
  | typeof postLoginAdminRoutesFeatureName;