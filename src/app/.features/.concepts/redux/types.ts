import {SelectOption} from '../../../.widgets/@form/input/select/SelectInput';
import {IConcept} from '../../../../.junction/models/concept/models';
import {IFeatureState, IKeyedState} from '../../../state/state.types';

export type ConceptOption = SelectOption<IConcept>;
export type ConceptFeatureStateDataConcepts = { list: IConcept[]; lastFetched: number | null };
export type ConceptFeatureData = { concepts: ConceptFeatureStateDataConcepts };
export type ConceptFeatureState =
  IFeatureState<ConceptFeatureData>
  & IKeyedState<{ renderKey: number }>;