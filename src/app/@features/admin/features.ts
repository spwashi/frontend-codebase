import {
  featureId__adminControlPanelsPostLogin,
  featureId__adminControlPanelsPreLogin,
} from "@/features/ids";

export type IAdminFeatureNames =
  | typeof featureId__adminControlPanelsPreLogin
  | typeof featureId__adminControlPanelsPostLogin;
