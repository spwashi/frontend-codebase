import {SelectOption} from '../../../components/form/input/select/SelectInput';
import {IEvent} from '../../../../.junction/models/event/models';
import {Feature, KeyedState} from '../../../redux/state.types';

export type EventOption = SelectOption<IEvent>;
export type EventFeatureStateDataEvents = { list: IEvent[]; lastFetched: number | null };
export type EventFeatureData = { events: EventFeatureStateDataEvents };
export type EventFeatureState = Feature<EventFeatureData> & KeyedState<{renderKey: number}>;