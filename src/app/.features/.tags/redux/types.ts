import {ITag} from '../../../../.junction/models/tag/models';
import {SelectOption} from '../../../.widgets/.form/.fields/components/input/select/SelectInput';
import {IFeatureState, IKeyedState} from '../../../.services/.redux/state.types';

export type TagOption = SelectOption<ITag>
export type TagFeatureStateDataTags = { list: ITag[]; lastFetched: number | null }
export type TagFeatureData = { tags: TagFeatureStateDataTags };
export type TagFeatureState =
  IFeatureState<TagFeatureData>
  & IKeyedState