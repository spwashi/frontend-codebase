import { IConcept } from "@junction/models/concept/models";
import { ConceptOption } from "./types";
import { IRootAppState } from "@core/types/IRootAppState";

function conceptToOption(concept: IConcept): ConceptOption {
  return {
    title: concept.title,
    value: concept.title,
    payload: concept,
  };
}

export const selectConceptFeature = (state: IRootAppState) =>
  state.features.concept;
export const selectPossibleConceptsList = (state: IRootAppState) =>
  selectConceptFeature(state).data.concepts.list?.map(conceptToOption);
export const selectPossibleConceptsLastFetched = (state: IRootAppState) =>
  selectConceptFeature(state).data.concepts.lastFetched;
export const selectConceptStateKey = (state: IRootAppState) =>
  selectConceptFeature(state).state.key;
