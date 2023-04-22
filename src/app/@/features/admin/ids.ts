import {
  featureId__adminPostLogin,
  featureId__adminPreLogin,
} from "@/features/ids";

export type IAdminFeatureID =
  | typeof featureId__adminPreLogin
  | typeof featureId__adminPostLogin;
