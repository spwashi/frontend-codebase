import React, {Fragment} from 'react';
import {featureComponentMap, IFeatureName} from '@features/index';

export function FeatureList({list}: { list: IFeatureName[] }) {
  return (
    <Fragment>{
      list.map(name => {
        const Component = featureComponentMap[name];
        return (
          <Fragment key={name}>
            {
              Component.featureDeps && Component.featureDeps.map((Dep, index) => <Dep key={`${name} - ${index}`}/>)
            }
            <Component key={name}/>
          </Fragment>
        )
      })
    }</Fragment>
  );
}
