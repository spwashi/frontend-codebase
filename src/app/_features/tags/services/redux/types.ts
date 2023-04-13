import {ITag} from '../../../../../.junction/models/tag/models';
import {SelectOption} from '../../../../_widgets/form/_features/fields/components/input/select/SelectInput';
import {IFeatureState, IKeyedState} from '../../../../_services/redux/types/state.types';

export type TagOption = SelectOption<ITag>
export type TagFeatureStateDataTags = { list: ITag[]; lastFetched: number | null }
export type TagFeatureData = { tags: TagFeatureStateDataTags };
export type TagFeatureState =
  IFeatureState<TagFeatureData>
  & IKeyedState