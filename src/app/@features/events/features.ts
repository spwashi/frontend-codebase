import {feature_eventCreateForm, feature_eventDisplay, feature_eventDisplayForm, feature_eventEditForm, feature_events, feature_eventTagForm} from '../../@/featureIds';

export type IEventFeatureNames =
  | typeof feature_events
  | typeof feature_eventDisplay
  | typeof feature_eventCreateForm
  | typeof feature_eventEditForm
  | typeof feature_eventTagForm
  | typeof feature_eventDisplayForm