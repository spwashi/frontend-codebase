export const eventFeatureName            = 'feature.events';
export const eventDisplayFeatureName     = 'feature.event.display';
export const eventCreateFormFeatureName  = 'feature.event.create.form';
export const eventEditFormFeatureName    = 'feature.event.edit.form';
export const eventTagFormFeatureName     = 'feature.event.tag.form';
export const eventDisplayFormFeatureName = 'feature.event.display.form';

export type IEventFeatureNames =
  | typeof eventFeatureName
  | typeof eventDisplayFeatureName
  | typeof eventCreateFormFeatureName
  | typeof eventEditFormFeatureName
  | typeof eventTagFormFeatureName
  | typeof eventDisplayFormFeatureName