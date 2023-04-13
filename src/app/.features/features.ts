import {FunctionComponent} from 'react';
import {UserFeatures} from './.users/Features';
import {SceneFeatures} from './.scenes/Features';
import {TagFeatures} from './.tags/Features';
import {ConceptFeatures} from './.concepts/Features';
import {EventFeatures} from './.events/Features';
import {ProjectFeatures} from './.projects/Features';

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