import {ITag} from '@junction/models/tag/models';
import {IRootAppState} from '@core/types/IRootAppState';
import {TagOption} from './types';


function tagToOption(tag: ITag): TagOption {
  return {
    title:   tag.title,
    value:   tag.title,
    payload: tag,
  };
}

export const selectTagFeature              = (state: IRootAppState) => state.features.tag;
export const selectPossibleTagsList        = (state: IRootAppState) => selectTagFeature(state).data.tags.list.map(tagToOption);
export const selectPossibleTagsLastFetched = (state: IRootAppState) => selectTagFeature(state).data.tags.lastFetched;
export const selectTagStateKey             = (state: IRootAppState) => selectTagFeature(state).state.key;