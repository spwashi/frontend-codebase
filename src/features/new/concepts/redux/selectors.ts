import {RootState} from '../../../../redux/state.types';

export const selectConceptFeature              = (state: RootState) => state.features.concept;
export const selectPossibleConceptsList        = (state: RootState) => selectConceptFeature(state).data.concepts.list;
export const selectPossibleConceptsLastFetched = (state: RootState) => selectConceptFeature(state).data.concepts.lastFetched;