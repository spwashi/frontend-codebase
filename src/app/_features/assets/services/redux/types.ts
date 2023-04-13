import {UserOption} from '../../../users/services/redux/types';
import {IFeatureState} from '../../../../_services/redux/types/state.types';

export type AssetFeatureStateDataAssets = { list: UserOption[]; lastFetched: number | null }
export type AssetFeatureState = IFeatureState<{ assets: AssetFeatureStateDataAssets }>