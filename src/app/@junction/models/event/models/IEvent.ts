export interface IEventIdentifyingPartial {
  id: IEventId;
}

type IEventId = string;
type IEventTitle = string;
type IEventDescription = string;
type IEventStart = string;
type IEventEnd = string;
type IEventUserId = number;

export interface IEvent {
  id: IEventId;
  title: IEventTitle;
  description: IEventDescription;
  start: IEventStart;
  end: IEventEnd;
  userid: IEventUserId;
}
