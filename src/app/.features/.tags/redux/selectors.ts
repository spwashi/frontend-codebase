import {ITag} from '../../../../.junction/models/tag/models';
import {RootState} from '../../../.services/.redux/rootState';
import {TagOption} from './types';


function tagToOption(tag: ITag): TagOption {
  return {
    title:   tag.title,
    value:   tag.title,
    payload: tag,
  };
}

export const selectTagFeature              = (state: RootState) => state.features.tag;
export const selectPossibleTagsList        = (state: RootState) => selectTagFeature(state).data.tags.list.map(tagToOption);
export const selectPossibleTagsLastFetched = (state: RootState) => selectTagFeature(state).data.tags.lastFetched;
export const selectTagStateKey             = (state: RootState) => selectTagFeature(state).state.key;