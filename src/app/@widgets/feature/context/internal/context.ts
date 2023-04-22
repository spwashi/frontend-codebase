import { createContext } from "react";
import { IFeature } from "../../types/feature";

/**
 * Describes the internal state of a feature
 */
export const FeatureInternalContext = createContext<{
  state: IFeature | null;
  dispatch: (action: { type: string }) => void;
} | null>(null);
