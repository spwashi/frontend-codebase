import {feature_adminControlPanelsPostLogin, feature_adminControlPanelsPreLogin} from '../../@/featureIds';

export type IAdminFeatureNames =
  | typeof feature_adminControlPanelsPreLogin
  | typeof feature_adminControlPanelsPostLogin;