import {ITag} from '../models';
import {IUser} from '../../user/models';
import {IConceptTag} from '../../concept/models';

export interface ITag_Complete extends ITag {
  user?: IUser;
  ConceptTag: IConceptTag;
}