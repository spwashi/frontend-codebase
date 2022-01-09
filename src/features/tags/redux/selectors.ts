import {RootState} from '../../../redux/state.types';

export const selectTagFeature              = (state: RootState) => state.features.tag;
export const selectPossibleTagsList        = (state: RootState) => selectTagFeature(state).data.tags.list;
export const selectPossibleTagsLastFetched = (state: RootState) => selectTagFeature(state).data.tags.lastFetched;
export const selectTagStateKey             = (state: RootState) => selectTagFeature(state).state.key;