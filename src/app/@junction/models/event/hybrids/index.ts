import {IEvent, IEventTag} from '../models';
import {ITag} from '../../tag/models';
import {IUser} from '../../user/models';

export interface IEventTag_Complete extends IEventTag {
  event: IEvent;
  tag: ITag;
}

export interface IEvent_Complete extends IEvent {
  user: IUser;
  eventTags?: IEventTag_Complete[]
}