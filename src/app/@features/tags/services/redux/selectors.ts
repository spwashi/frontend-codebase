import { IRootAppState } from "@core/types/IRootAppState";
import { TagOption } from "./types";
import { Tag } from "../../../../../__generated__/graphql";

function tagToOption(tag: Tag): TagOption {
  return {
    title: tag.title,
    value: tag.id,
    payload: tag.id,
  };
}

export const selectTagFeature = (state: IRootAppState) => state.features.tag;
export const selectPossibleTagOptions = (state: IRootAppState) =>
  selectTagFeature(state).data.tags.list.map(tagToOption);
export const selectPossibleTagsLastFetched = (state: IRootAppState) =>
  selectTagFeature(state).data.tags.lastFetched;
export const selectTagStateKey = (state: IRootAppState) =>
  selectTagFeature(state).state.key;
