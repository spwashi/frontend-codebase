import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { IFeatureState, IKeyedState } from "@services/redux/types/state.types";
import { Concept } from '@generated/graphql';

export type ConceptOption = SelectOption<Concept["id"]>;
export type ConceptFeatureStateDataConcepts = {
  list: Concept[];
  lastFetched: number | null;
};
export type ConceptFeatureData = { concepts: ConceptFeatureStateDataConcepts };
export type ConceptFeatureState = IFeatureState<ConceptFeatureData> &
  IKeyedState<{ renderKey: number }>;
