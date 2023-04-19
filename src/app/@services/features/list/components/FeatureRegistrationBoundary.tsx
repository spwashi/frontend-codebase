import React, { ReactNode, useEffect, useMemo, useReducer } from "react";
import { featuresReducer } from "../reducer";
import { getFrbContextStartState } from "@services/features/list/helpers/getInitialState";
import { Log } from "@core/dev/components/Log";
import { FeaturesRegistrationContext } from "../context";
import { IFeatureRegistrationContextState } from "@services/features/list/types";

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
