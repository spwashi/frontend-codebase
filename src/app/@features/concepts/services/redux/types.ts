import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { IConcept } from "@junction/models/concept/models";
import { IFeatureState, IKeyedState } from "@services/redux/types/state.types";

export type ConceptOption = SelectOption<IConcept["id"]>;
export type ConceptFeatureStateDataConcepts = {
  list: IConcept[];
  lastFetched: number | null;
};
export type ConceptFeatureData = { concepts: ConceptFeatureStateDataConcepts };
export type ConceptFeatureState = IFeatureState<ConceptFeatureData> &
  IKeyedState<{ renderKey: number }>;
