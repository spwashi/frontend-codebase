import {ITag} from '../../../../.junction/models/tag/models';
import {SelectOption} from '../../../components/form/input/select/SelectInput';
import {Feature, KeyedState} from '../../../redux/state.types';

export type TagOption = SelectOption<ITag>
export type TagFeatureStateDataTags = { list: ITag[]; lastFetched: number | null }
export type TagFeatureData = { tags: TagFeatureStateDataTags };
export type TagFeatureState =
  Feature<TagFeatureData>
  & KeyedState