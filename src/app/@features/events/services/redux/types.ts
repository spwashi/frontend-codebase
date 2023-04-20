import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { IEvent } from "@junction/models/event/models";
import { IFeatureState, IKeyedState } from "@services/redux/types/state.types";

export type EventOption = SelectOption<IEvent["id"]>;
export type EventFeatureStateDataEvents = {
  list: IEvent[];
  lastFetched: number | null;
};
export type EventFeatureData = { events: EventFeatureStateDataEvents };
export type EventFeatureState = IFeatureState<EventFeatureData> &
  IKeyedState<{ renderKey: number }>;
