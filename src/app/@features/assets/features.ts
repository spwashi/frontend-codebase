import {
  featureId__assetDisplay,
  featureId__assetDisplayForm,
  featureId__assets,
  featureId__assetUploadForm,
} from "@/features/ids";

export type IAssetFeatureNames =
  | typeof featureId__assets
  | typeof featureId__assetDisplay
  | typeof featureId__assetDisplayForm
  | typeof featureId__assetUploadForm;
