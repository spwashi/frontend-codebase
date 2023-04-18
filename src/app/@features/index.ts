import {FunctionComponent} from 'react';
import {UserFeatures} from './users/components/Features';
import {SceneFeatures} from './scenes/components/Features';
import {TagFeatures} from './tags/components/Features';
import {ConceptFeatures} from './concepts/components/Features';
import {EventFeatures} from './events/components/Features';
import {ProjectFeatures} from './projects/components/Features';

export const featureComponentMap:
               {
                 [key: string]: FunctionComponent<React.PropsWithChildren<unknown>> & { featureDeps?: FunctionComponent<React.PropsWithChildren<unknown>>[] }
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
export {projectInput} from '@features/users/data/config/inputs';
export {passwordInput} from '@features/users/data/config/inputs';
export {anyUserInput} from '@features/users/data/config/inputs';
export {form__login} from '@features/users/behaviors/login/config';
export {gqlMutationNode_LOGIN} from '@features/users/services/graphql/one/mutations/login';
export {gqlQueryNode_USER_LIST} from '@features/users/services/graphql/queries/list/query';
export {gqlQueryNode_TAG_LIST} from '@features/tags/services/graphql/queries/list/query';