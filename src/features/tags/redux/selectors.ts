import {RootState, TagOption} from '../../../redux/state.types';
import {ITag} from '../../../models/tag/models';
import {SelectOption} from '../../../components/form/input/select/SelectInput';


function tagToOption(tag: ITag): SelectOption & TagOption {
    return {title: tag.title, value: tag.title, tag};
}

export const selectTagFeature              = (state: RootState) => state.features.tag;
export const selectPossibleTagsList        = (state: RootState) => selectTagFeature(state).data.tags.list.map(tagToOption);
export const selectPossibleTagsLastFetched = (state: RootState) => selectTagFeature(state).data.tags.lastFetched;
export const selectTagStateKey             = (state: RootState) => selectTagFeature(state).state.key;