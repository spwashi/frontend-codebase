import {SelectOption} from '../../../components/form/input/select/SelectInput';
import {IConcept} from '../../../../junction/models/concept/models';
import {Feature, KeyedState} from '../../../redux/state.types';

export type ConceptOption = SelectOption<IConcept>;
export type ConceptFeatureStateDataConcepts = { list: IConcept[]; lastFetched: number | null };
export type ConceptFeatureData = { concepts: ConceptFeatureStateDataConcepts };
export type ConceptFeatureState = Feature<ConceptFeatureData> & KeyedState<{renderKey: number}>;