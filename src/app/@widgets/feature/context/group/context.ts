import { createContext } from "react";
import { getFrbContextStartState } from "@widgets/feature/context/group/helpers/getInitialState";
import { IFeatureRegistrationContext } from "./types";

/**
 * Describes a collection of states about features
 */
export const FeaturesRegistrationContext = createContext({
  state: getFrbContextStartState(),
  dispatch: () => {},
} as IFeatureRegistrationContext);
