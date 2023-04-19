import React, { useContext, useEffect, useMemo, useReducer } from "react";
import { FeatureInternalContext } from "../context";
import { IFeature } from "../types";
import { FeaturesRegistrationContext } from "@services/features/list/context";
import { appClassnames } from "@core/styles/classNames";

export type IFeatureProps = {
  name: IFeature["featureId"];
  items?: any;
  children?: any | undefined;
  enabled?: boolean;
};

/**
 * Registers or unregisters the feature from a FeaturesRegistrationContext
 */
function useFeatureRegistrationEffect(
  name: IFeature["featureId"],
  enabled: undefined | boolean
) {
  const features = useContext(FeaturesRegistrationContext);
  useEffect(() => {
    features.dispatch({
      type: enabled ? "REGISTER" : "UNREGISTER",
      payload: { featureName: name },
    });
    return () => {
      features.dispatch({
        type: "UNREGISTER",
        payload: { featureName: name },
      });
    };
  }, [enabled]);
}
/**
 * Registers a Feature with a given name on the nearest FeatureBoundary
 */
export function Feature({ name, children, enabled = true }: IFeatureProps) {
  useFeatureRegistrationEffect(name, enabled);

  const [state, dispatch] = useReducer((state: IFeature | null) => state, null);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const features = useContext(FeaturesRegistrationContext);

  if (!enabled) return null;
  if (features.state?.featuresDisabled) return null;
  return (
    <FeatureInternalContext.Provider value={value}>
      {children && (
        <section
          className={appClassnames.services.features.component}
          data-feature-name={name}
        >
          {children}
        </section>
      )}
    </FeatureInternalContext.Provider>
  );
}
