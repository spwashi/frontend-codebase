import {
  featureId__eventCreateForm,
  featureId__eventDisplay,
  featureId__eventDisplayForm,
  featureId__eventEditForm,
  featureId__events,
  featureId__eventTagForm,
} from "@/features/ids";

export type IEventFeatureID =
  | typeof featureId__events
  | typeof featureId__eventDisplay
  | typeof featureId__eventCreateForm
  | typeof featureId__eventEditForm
  | typeof featureId__eventTagForm
  | typeof featureId__eventDisplayForm;
