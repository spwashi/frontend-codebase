import {ConceptFeatureState} from '../_features/concepts/_services/.redux/types';
import {ProjectFeatureState} from '../_features/projects/_services/.redux/types';
import {TagFeatureState} from '../_features/tags/_services/.redux/types';
import {UserFeatureState} from '../_features/users/_services/.redux/types';
import {AssetFeatureState} from '../_features/assets/_services/.redux/types';
import {SceneFeatureState} from '../_features/scenes/_services/.redux/types';
import {EventFeatureState} from '../_features/events/_services/.redux/types';

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