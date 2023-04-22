import {
  featureId__tagCreateForm,
  featureId__tagDisplay,
  featureId__tags,
  featureId__tagsDisplayForm,
} from '@/featureIds';

export type ITagFeatureNames =
  | typeof featureId__tags
  | typeof featureId__tagDisplay
  | typeof featureId__tagCreateForm
  | typeof featureId__tagsDisplayForm;
