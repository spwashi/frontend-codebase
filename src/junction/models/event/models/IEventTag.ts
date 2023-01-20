type IEventTagId = number;
type IEventTagEventId = number;
type IEventTagTagId = number;

export interface IEventTag {
    id: IEventTagId;
    eventId: IEventTagEventId;
    tagId: IEventTagTagId;
}