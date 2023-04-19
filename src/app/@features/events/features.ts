import {
  featureId__eventCreateForm,
  featureId__eventDisplay,
  featureId__eventDisplayForm,
  featureId__eventEditForm,
  featureId__eventTagForm,
  featureId__events,
} from "../../@/featureIds";

export type IEventFeatureNames =
  | typeof featureId__events
  | typeof featureId__eventDisplay
  | typeof featureId__eventCreateForm
  | typeof featureId__eventEditForm
  | typeof featureId__eventTagForm
  | typeof featureId__eventDisplayForm;
