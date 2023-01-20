import {ConceptFeatureState} from '../features/concepts/redux/types';
import {ProjectFeatureState} from '../features/projects/redux/types';
import {TagFeatureState} from '../features/tags/redux/types';
import {UserFeatureState} from '../features/users/redux/types';
import {AssetFeatureState} from '../features/assets/redux/types';
import {SceneFeatureState} from '../features/scenes/redux/types';
import {EventFeatureState} from '../features/events/redux/types';

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