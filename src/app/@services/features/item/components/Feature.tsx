import React, {useContext, useEffect, useMemo, useReducer} from 'react';
import {FeatureInternalContext} from '../context';
import {IFeature, IFeatureName} from '../types';
import {FeaturesRegistrationContext} from '@services/features/list/context';

export type IFeatureProps = {
  name: IFeatureName,
  items?: any,
  children?: any | undefined,
  enabled?: boolean
};

/**
 * Registers or unregisters the feature from a FeaturesRegistrationContext
 */
function useFeatureRegistrationEffect(name: IFeatureName, enabled: undefined | boolean) {
  const features = useContext(FeaturesRegistrationContext);
  useEffect(() => {
    features.dispatch({
                        type:    enabled ? 'REGISTER' : 'UNREGISTER',
                        payload: {featureName: name},
                      });
    return () => {
      features.dispatch({
                          type:    'UNREGISTER',
                          payload: {featureName: name},
                        })
    }
  }, [enabled]);
}
/**
 * Registers a Feature with a given name on the nearest FeatureBoundary
 */
export function Feature({name, children, enabled = true}: IFeatureProps) {
  useFeatureRegistrationEffect(name, enabled);

  const [state, dispatch] = useReducer((state: IFeature | null) => state, null);
  const value             = useMemo(() => ({state, dispatch}), [state, dispatch]);
  const features          = useContext(FeaturesRegistrationContext);

  if (!enabled) return null;
  if (features.state?.disabled) return null;
  return (
    <FeatureInternalContext.Provider value={value}>
      {children}
    </FeatureInternalContext.Provider>
  )
}

