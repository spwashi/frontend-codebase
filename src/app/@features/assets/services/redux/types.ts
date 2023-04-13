import {UserOption} from '../../../users/services/redux/types';
import {IFeatureState} from '@services/redux/types/state.types';

export type AssetFeatureStateDataAssets = { list: UserOption[]; lastFetched: number | null }
export type AssetFeatureState = IFeatureState<{ assets: AssetFeatureStateDataAssets }>