import { IFeatureState } from "@services/redux/types/state.types";
import { UserOption } from "../../../users/services/redux/types";

export type AssetFeatureStateDataAssets = {
  list: UserOption[];
  lastFetched: number | null;
};
export type AssetFeatureState = IFeatureState<{
  assets: AssetFeatureStateDataAssets;
}>;
