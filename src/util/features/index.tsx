import React, {createContext, useContext, useEffect, useMemo, useReducer} from 'react';

type IFeature =
    {
        name: string
    }
    | null;
const FeatureContext =
          createContext<{ state: IFeature, dispatch: (action: { type: string }) => void } | null>(null);

export const Feature =
                 ({
                      name,
                      children,
                      enabled = true,
                  }: {
                     name: string,
                     items?: any,
                     children?: any | undefined,
                     enabled?: boolean
                 }) => {
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


                     const [state, dispatch] = useReducer((state: IFeature, action: { type: string }) => state, null);
                     const value             = useMemo(() => ({state, dispatch}), [state, dispatch]);
                     if (!enabled) return null;
                     return (
                         <FeatureContext.Provider value={value}>
                             {children}
                         </FeatureContext.Provider>
                     )
                 };

type IFeatures = { features: any };
export const FeaturesContext =
                 createContext(
                     {
                         state:    {
                             features: {},
                         },
                         dispatch: (action: { type: string }) => {},
                     } as {
                         state: IFeatures | null,
                         dispatch: React.Dispatch<FeatureAction>
                     });

type FeatureAction =
    { type: 'REGISTER' | 'UNREGISTER', payload: { featureName: string } };

export const FeaturesBoundary =
                 ({children}: { children: any }) => {
                     const [state, dispatch] = useReducer((state: IFeatures, action: FeatureAction) => {
                         switch (action.type) {
                             case 'UNREGISTER':
                             case 'REGISTER':
                                 return {
                                     ...state,
                                     features: {
                                         ...state.features,
                                         [action.payload.featureName]: action.type === 'REGISTER',
                                     },
                                 }
                             default:
                                 return state;
                         }
                     }, {features: {}});
                     const value             = useMemo(() => ({state, dispatch}), [state, dispatch]);
                     return (
                         <FeaturesContext.Provider value={value}>
                             {children}
                         </FeaturesContext.Provider>
                     )
                 };

export const FeatureRequirement = ({
                                       name,
                                       children,
                                       active = true,
                                   }: { children: any, name: string, active?: boolean }) => {
    const features = useContext(FeaturesContext);
    if (!active) return children;
    if (features.state?.features[name]) return children;
    return null;
}