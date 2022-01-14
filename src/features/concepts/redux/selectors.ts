import {ConceptOption, RootState} from '../../../redux/state.types';
import {IConcept} from '../../../models/concept/models';
import {SelectOption} from '../../../components/form/input/select/SelectInput';

function conceptToOption(concept: IConcept): SelectOption & ConceptOption {
    return {title: concept.title, value: concept.title, concept};
}

export const selectConceptFeature              = (state: RootState) => state.features.concept;
export const selectPossibleConceptsList        = (state: RootState) => selectConceptFeature(state).data.concepts.list?.map(conceptToOption);
export const selectPossibleConceptsLastFetched = (state: RootState) => selectConceptFeature(state).data.concepts.lastFetched;