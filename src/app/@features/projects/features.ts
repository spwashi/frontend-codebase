import {
  featureId__projectCreate,
  featureId__projectDisplay,
  featureId__projects,
} from '@/featureIds';

export type IProjectFeatureNames =
  | typeof featureId__projects
  | typeof featureId__projectDisplay
  | typeof featureId__projectCreate;
