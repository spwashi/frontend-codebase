import { createContext } from "react";
import { getFrbContextStartState } from "@services/features/list/helpers/getInitialState";
import { IFeatureRegistrationContext } from "./types";

/**
 * Describes a collection of states about features
 */
export const FeaturesRegistrationContext = createContext({
  state: getFrbContextStartState(),
  dispatch: () => {
    console.log("dispatched");
  },
} as IFeatureRegistrationContext);
