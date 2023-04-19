import { IFeatureRegistrationContextState } from "@services/features/list/types";

export function getFrbContextStartState(
  { featuresDisabled }: { featuresDisabled?: boolean } = {
    featuresDisabled: false,
  }
): IFeatureRegistrationContextState {
  return {
    featuresDisabled: !!featuresDisabled,
    stateKey: 0,
    lastAction: null,
    features: { available: {} },
  };
}
