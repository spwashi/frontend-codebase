import React, {Component, FunctionComponent} from 'react';
import {ProjectFeatures} from './projects/ProjectFeatures';
import {TagFeatures} from './tags/TagFeatures';
import {ConceptFeatures} from './concepts/ConceptFeatures';
import {UserFeatures} from '../app/Users';

const featureDict: { [key: string]: FunctionComponent & { dependencies?: FunctionComponent[] } } =
          {
              users:    UserFeatures,
              files:    () => {return null},
              tags:     TagFeatures,
              concepts: ConceptFeatures,
              projects: ProjectFeatures,
          }

type FeatureName = (keyof typeof featureDict);

export function Features({list}: { list: FeatureName[] }) {
    return <>{list.map(name => {
        const Component = featureDict[name];
        return <React.Fragment>
            {
                Component.dependencies && Component.dependencies.map((Dep, index) => <Dep key={name + ' - ' + index}/>)
            }
            <Component key={name}/>
        </React.Fragment>
    })}</>;
}
