import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { IFeatureState, IKeyedState } from "@services/redux/types/state.types";
import { Event } from "../../../../../__generated__/graphql";

export type EventOption = SelectOption<Event["id"]>;
export type EventFeatureStateDataEvents = {
  list: Event[];
  lastFetched: number | null;
};
export type EventFeatureData = { events: EventFeatureStateDataEvents };
export type EventFeatureState = IFeatureState<EventFeatureData> &
  IKeyedState<{ renderKey: number }>;
