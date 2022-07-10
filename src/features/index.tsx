import React, {Component, FunctionComponent} from 'react';
import {ProjectFeatures} from './projects/Features';
import {TagFeatures} from './tags/Features';
import {ConceptFeatures} from './concepts/Features';
import {UserFeatures} from './users/Features';
import {SceneFeatures} from './scenes/Features';
import {EventFeatures} from './events/Features';

const featureDict: { [key: string]: FunctionComponent & { dependencies?: FunctionComponent[] } } =
          {
              users:    UserFeatures,
              scenes:   SceneFeatures,
              assets:    () => {return null},
              tags:     TagFeatures,
              concepts: ConceptFeatures,
              events:   EventFeatures,
              projects: ProjectFeatures,
          }

type FeatureName = (keyof typeof featureDict);

export function Features({list}: { list: FeatureName[] }) {
    return <>{list.map(name => {
        const Component = featureDict[name];
        return <React.Fragment key={name}>
            {
                Component.dependencies && Component.dependencies.map((Dep, index) => <Dep key={name + ' - ' + index}/>)
            }
            <Component key={name}/>
        </React.Fragment>
    })}</>;
}
