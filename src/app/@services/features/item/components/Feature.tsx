import React, {useContext, useEffect, useMemo, useReducer} from 'react';
import {FeaturesRegistrationContext} from '../../list/context';
import {FeatureInternalContext} from '../context';
import {IFeature, IFeatureName} from '../types';

export type IFeatureProps = {
  name: IFeatureName,
  items?: any,
  children?: any | undefined,
  enabled?: boolean
};

/**
 * Registers a Feature with a given name on the nearest FeatureBoundary
 *
 * @param name
 * @param children
 * @param enabled
 * @constructor
 */
export function Feature({name, children, enabled = true}: IFeatureProps) {
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


  const [state, dispatch] = useReducer((state: IFeature | null) => state, null);
  const value             = useMemo(() => ({state, dispatch}), [state, dispatch]);
  if (!enabled) return null;
  return (
    <FeatureInternalContext.Provider value={value}>
      {children}
    </FeatureInternalContext.Provider>
  )
}

