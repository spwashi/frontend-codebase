import {ConceptFeatureState} from '../../.features/.concepts/.services/.redux/types';
import {ProjectFeatureState} from '../../.features/.projects/.services/.redux/types';
import {TagFeatureState} from '../../.features/.tags/.services/.redux/types';
import {UserFeatureState} from '../../.features/.users/.services/.redux/types';
import {AssetFeatureState} from '../../.features/.assets/.services/.redux/types';
import {SceneFeatureState} from '../../.features/.scenes/.services/.redux/types';
import {EventFeatureState} from '../../.features/.events/.services/.redux/types';

export type RootState = {
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