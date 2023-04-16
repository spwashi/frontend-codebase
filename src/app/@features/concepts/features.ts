import {feature_conceptDisplay, feature_conceptDisplayForm, feature_concepts, feature_conceptTagForm, feature_createConceptForm, feature_editConceptForm} from '../../@/featureIds';

export type IConceptFeatureNames =
  | typeof feature_concepts
  | typeof feature_conceptDisplay
  | typeof feature_conceptDisplayForm
  | typeof feature_createConceptForm
  | typeof feature_editConceptForm
  | typeof feature_conceptTagForm