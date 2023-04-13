import {ConceptFeatureState} from '../_features/concepts/services/redux/types';
import {ProjectFeatureState} from '../_features/projects/services/redux/types';
import {TagFeatureState} from '../_features/tags/services/redux/types';
import {UserFeatureState} from '../_features/users/services/redux/types';
import {AssetFeatureState} from '../_features/assets/services/redux/types';
import {SceneFeatureState} from '../_features/scenes/services/redux/types';
import {EventFeatureState} from '../_features/events/services/redux/types';

export type IRootAppState = {
  features: {
    user: UserFeatureState;
    project: ProjectFeatureState;
    concept: ConceptFeatureState;
    event: EventFeatureState;
    tag: TagFeatureState;
    assets: AssetFeatureState;
    scene: SceneFeatureState
  }
};