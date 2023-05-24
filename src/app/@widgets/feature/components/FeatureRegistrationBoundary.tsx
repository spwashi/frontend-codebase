import React, { ReactNode, useEffect, useMemo, useReducer } from "react";
import { getFrbContextStartState } from "@widgets/feature/context/group/helpers/getInitialState";
import { Log } from "@core/dev/components/Log";
import { IFeatureRegistrationContextState } from "@widgets/feature/context/group/types";
import { FeatureContextExternal } from "../context/group/context";
import { featuresReducer } from "../context/group/reducer";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

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
    <FeatureContextExternal.Provider value={contextValue}>
      <Feature name={featureIds.app.aggregate_features}>
        <Log title={"Features"}>{contextValue}</Log>
      </Feature>
      {children}
    </FeatureContextExternal.Provider>
  );
}
