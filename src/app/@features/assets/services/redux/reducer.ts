import { combineReducers } from "redux";
import { AssetFeatureState, AssetFeatureStateDataAssets } from "./types";

export const assetReducer = combineReducers<AssetFeatureState>({
  enabled: () => true,
  features: (state = {}) => state,
  data: combineReducers({
    assets: (
      state: AssetFeatureStateDataAssets = {
        lastFetched: null,
        list: [],
      }
    ) => {
      return state;
    },
  }),
});
