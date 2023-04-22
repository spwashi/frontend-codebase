import {
  featureId__projectCreate,
  featureId__projectDisplay,
  featureId__projects,
} from "@/features/ids";

export type IProjectFeatureID =
  | typeof featureId__projects
  | typeof featureId__projectDisplay
  | typeof featureId__projectCreate;
