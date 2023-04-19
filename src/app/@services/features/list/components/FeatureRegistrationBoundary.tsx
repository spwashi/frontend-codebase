import React, { ReactNode, useEffect, useMemo, useReducer } from "react";
import { getFrbContextStartState } from "@services/features/list/helpers/getInitialState";
import { Log } from "@core/dev/components/Log";
import { IFeatureRegistrationContextState } from "@services/features/list/types";
import { FeaturesRegistrationContext } from "../context";
import { featuresReducer } from "../reducer";

type IFRB_Props = {
  children: ReactNode;
  featuresDisabled?: boolean;
  onAttemptRegister?: (state: IFeatureRegistrationContextState) => void;
};
/**
 * Keeps track of feature registration status
 */
export function FeatureRegistrationBoundary({
  children,
  featuresDisabled,
  onAttemptRegister,
}: IFRB_Props) {
  const [state, dispatch] = useReducer(
    featuresReducer,
    getFrbContextStartState({ featuresDisabled: featuresDisabled })
  );
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    onAttemptRegister?.(contextValue.state);
  }, [contextValue.state.stateKey]);

  return (
    <FeaturesRegistrationContext.Provider value={contextValue}>
      <Log title={"Features"}>{contextValue}</Log>
      {children}
    </FeaturesRegistrationContext.Provider>
  );
}
