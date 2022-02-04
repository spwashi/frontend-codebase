import {UserOption} from '../../users/redux/types';
import {Feature} from '../../../redux/state.types';

export type FileFeatureStateDataFiles = { list: UserOption[]; lastFetched: number | null }
export type FileFeatureState = Feature<{ files: FileFeatureStateDataFiles }>