import React from 'react';

export type IFeatureRegistrationContextState = { features: any };
export type IFeatureRegistrationContextAction = { type: 'REGISTER' | 'UNREGISTER', payload: { featureName: string } };
export type IFeatureRegistrationContextDispatch = React.Dispatch<IFeatureRegistrationContextAction>;
export type IFeatureRegistrationContext = {
  state: IFeatureRegistrationContextState | null,
  dispatch: IFeatureRegistrationContextDispatch
};

