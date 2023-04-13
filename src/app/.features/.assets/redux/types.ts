import {UserOption} from '../../.users/redux/types';
import {IFeatureState} from '../../../.services/.redux/state.types';

export type AssetFeatureStateDataAssets = { list: UserOption[]; lastFetched: number | null }
export type AssetFeatureState = IFeatureState<{ assets: AssetFeatureStateDataAssets }>