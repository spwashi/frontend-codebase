import {ConceptOption, RootState} from '../../../redux/state.types';
import {IConcept} from '../../../models/concept/models';

function conceptToOption(concept: IConcept): ConceptOption {
    return {title: concept.title, value: concept.title, concept};
}

export const selectConceptFeature              = (state: RootState) => state.features.concept;
export const selectPossibleConceptsList        = (state: RootState) => selectConceptFeature(state).data.concepts.list?.map(conceptToOption);
export const selectPossibleConceptsLastFetched = (state: RootState) => selectConceptFeature(state).data.concepts.lastFetched;