import React, {createContext, ReactNode, useContext, useEffect, useMemo, useReducer} from 'react';
import {Dev} from '@core/dev/components/Dev';
import {Log} from '@core/dev/components/Log';

type IFeature =
  {
    name: string
  }
  | null;
const FeatureContext =
        createContext<{ state: IFeature, dispatch: (action: { type: string }) => void } | null>(null);

type IFeatureProps = {
  name: string,
  items?: any,
  children?: any | undefined,
  enabled?: boolean
};

export function Feature({name, children, enabled = true}: IFeatureProps) {
  const features = useContext(FeaturesContext);
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


  const [state, dispatch] = useReducer((state: IFeature) => state, null);
  const value             = useMemo(() => ({state, dispatch}), [state, dispatch]);
  if (!enabled) return null;
  return (
    <FeatureContext.Provider value={value}>
      {children}
    </FeatureContext.Provider>
  )
}

type IFeatures = { features: any };
type IFeatureContext = {
  state: IFeatures | null,
  dispatch: React.Dispatch<FeatureAction>
};
export const FeaturesContext = createContext({
                                               state:    {
                                                 features: {},
                                               },
                                               dispatch: () => {
                                                 console.log('dispatched')
                                               },
                                             } as IFeatureContext);

type FeatureAction =
  { type: 'REGISTER' | 'UNREGISTER', payload: { featureName: string } };

export function FeaturesBoundary({children}: { children: ReactNode }) {
  const [state, dispatch] = useReducer((state: IFeatures, action: FeatureAction) => {
    switch (action.type) {
      case 'UNREGISTER':
      case 'REGISTER':
        return {
          ...state,
          features: {
            ...state.features,
            available: {
              ...state.features.available,
              [action.payload.featureName]: action.type === 'REGISTER',
            },
          },
        }
      default:
        return state;
    }
  }, {features: {available: {}}});
  const value             = useMemo(() => ({state, dispatch}), [state, dispatch]);
  return (
    <FeaturesContext.Provider value={value}>
      <Log title={'Features'}>{value}</Log>
      {children}
    </FeaturesContext.Provider>
  )
}

export function FeatureRequirement({
                                     name,
                                     children,
                                     active = true,
                                     alternative,
                                   }: {
  children: any;
  name: string;
  active?: boolean;
  alternative: any
}) {
  const features = useContext(FeaturesContext);
  if (!active) return children;
  if (features.state?.features?.available[name]) return children;
  return alternative ?? <Dev>[disabled]</Dev>;
}