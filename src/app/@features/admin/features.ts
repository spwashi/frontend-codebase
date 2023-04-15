export const adminControlPanelsPreLoginFeatureName  = 'feature.admin.routes[pre-login]';
export const adminControlPanelsPostLoginFeatureName = 'feature.admin.routes[post-login]';

export type IAdminFeatureNames =
  | typeof adminControlPanelsPreLoginFeatureName
  | typeof adminControlPanelsPostLoginFeatureName;