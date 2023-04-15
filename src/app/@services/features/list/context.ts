import {createContext} from 'react';
import {IFeatureRegistrationContext} from './types';
import {getFrbContextStartState} from '@services/features/list/helpers/getInitialState';


/**
 * Describes a collection of states about features
 */
export const FeaturesRegistrationContext =
  createContext(
    {
      state:    getFrbContextStartState(),
      dispatch: () => {
        console.log('dispatched')
      },
    } as IFeatureRegistrationContext,
  );