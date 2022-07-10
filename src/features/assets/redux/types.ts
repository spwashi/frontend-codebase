import {UserOption} from '../../users/redux/types';
import {Feature} from '../../../redux/state.types';

export type AssetFeatureStateDataAssets = { list: UserOption[]; lastFetched: number | null }
export type AssetFeatureState = Feature<{ assets: AssetFeatureStateDataAssets }>