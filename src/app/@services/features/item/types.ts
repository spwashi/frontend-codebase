import {IAdminFeatureNames} from '@features/admin/features';
import {IAssetFeatureNames} from '@features/assets/features';
import {IConceptFeatureNames} from '@features/concepts/features';
import {IEventFeatureNames} from '@features/events/features';
import {IProjectFeatureNames} from '@features/projects/features';
import {ISceneFeatureNames} from '@features/scenes/features';
import {ITagFeatureNames} from '@features/tags/features';
import {IUserFeatureNames} from '@features/users/features';

export type IFeature = { name: IFeatureName };
export type IFeatureName =
  `feature.${string}`
  & (
    | IAdminFeatureNames
    | IAssetFeatureNames
    | IConceptFeatureNames
    | IEventFeatureNames
    | IProjectFeatureNames
    | ISceneFeatureNames
    | ITagFeatureNames
    | IUserFeatureNames
    );