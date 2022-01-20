import {ConceptFeatureState} from '../features/concepts/redux/types';
import {ProjectFeatureState} from '../features/projects/redux/types';
import {TagFeatureState} from '../features/tags/redux/types';
import {UserFeatureState} from '../features/users/redux/types';
import {FileFeatureState} from '../features/files/redux/types';

export type RootState = {
    features: {
        user: UserFeatureState;
        project: ProjectFeatureState;
        concept: ConceptFeatureState;
        tag: TagFeatureState;
        files: FileFeatureState
    }
};