import {
  featureId__conceptCreateForm,
  featureId__conceptDisplay,
  featureId__conceptDisplayForm,
  featureId__conceptEditForm,
  featureId__concepts,
  featureId__conceptTagForm,
} from "@/features/ids";

export type IConceptFeatureNames =
  | typeof featureId__concepts
  | typeof featureId__conceptDisplay
  | typeof featureId__conceptDisplayForm
  | typeof featureId__conceptCreateForm
  | typeof featureId__conceptEditForm
  | typeof featureId__conceptTagForm;
