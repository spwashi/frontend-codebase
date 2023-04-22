import { IRootAppState } from "@core/types/IRootAppState";
import { Concept } from "../../../../../__generated__/graphql";
import { ConceptOption } from "./types";

function conceptToOption(concept: Concept): ConceptOption {
  return {
    title: concept.title,
    value: concept.id,
    payload: concept.id,
  };
}

export const selectConceptFeature = (state: IRootAppState) =>
  state.features.concept;
export const selectConceptList = (state: IRootAppState) =>
  selectConceptFeature(state).data.concepts.list ?? [];
export const selectPossibleConceptOptions = (state: IRootAppState) =>
  selectConceptList(state).map(conceptToOption);
export const selectPossibleConceptsLastFetched = (state: IRootAppState) =>
  selectConceptFeature(state).data.concepts.lastFetched;
export const selectConceptStateKey = (state: IRootAppState) =>
  selectConceptFeature(state).state.key;
