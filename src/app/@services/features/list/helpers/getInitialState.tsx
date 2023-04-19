import { IFeatureRegistrationContextState } from "@services/features/list/types";

export function getFrbContextStartState(
  { disabled }: { disabled?: boolean } = { disabled: false }
): IFeatureRegistrationContextState {
  return {
    disabled: !!disabled,
    stateKey: 0,
    lastAction: null,
    features: { available: {} },
  };
}
