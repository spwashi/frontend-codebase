import {FunctionComponent} from 'react';
import {UserFeatures} from './users/components/Features';
import {SceneFeatures} from './scenes/components/Features';
import {TagFeatures} from './tags/components/Features';
import {ConceptFeatures} from './concepts/components/Features';
import {EventFeatures} from './events/components/Features';
import {ProjectFeatures} from './projects/components/Features';

export const featureComponentMap:
               {
                 [key: string]: FunctionComponent & { featureDeps?: FunctionComponent[] }
               } =
               {
                 users:    UserFeatures,
                 scenes:   SceneFeatures,
                 assets:   () => {return null},
                 tags:     TagFeatures,
                 concepts: ConceptFeatures,
                 events:   EventFeatures,
                 projects: ProjectFeatures,
               }

export type IFeatureName = (keyof typeof featureComponentMap);