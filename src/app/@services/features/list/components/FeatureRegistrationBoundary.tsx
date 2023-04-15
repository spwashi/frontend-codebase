import React, {ReactNode, useMemo, useReducer} from 'react';
import {featuresReducer} from '../reducer';
import {getInitialFeaturesRegistrationContextState} from '@services/features/list/helpers/getInitialState';
import {Log} from '@core/dev/components/Log';
import {FeaturesRegistrationContext} from '../context';

/**
 * Keeps track of feature registration status
 *
 * @param children
 * @constructor
 */
export function FeatureRegistrationBoundary({children}: { children: ReactNode }) {
  const [state, dispatch] = useReducer(featuresReducer, getInitialFeaturesRegistrationContextState());
  const contextValue      = useMemo(() => ({state, dispatch}), [state, dispatch]);
  return (
    <FeaturesRegistrationContext.Provider value={contextValue}>
      <Log title={'Features'}>{contextValue}</Log>
      {children}
    </FeaturesRegistrationContext.Provider>
  )
}