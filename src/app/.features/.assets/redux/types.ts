import {UserOption} from '../../.users/redux/types';
import {IFeatureState} from '../../../state/state.types';

export type AssetFeatureStateDataAssets = { list: UserOption[]; lastFetched: number | null }
export type AssetFeatureState = IFeatureState<{ assets: AssetFeatureStateDataAssets }>