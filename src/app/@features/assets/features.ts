import {
  featureId__assetDisplay,
  featureId__assetDisplayForm,
  featureId__assetUploadForm,
  featureId__assets,
} from "../../@/featureIds";

export type IAssetFeatureNames =
  | typeof featureId__assets
  | typeof featureId__assetDisplay
  | typeof featureId__assetDisplayForm
  | typeof featureId__assetUploadForm;
