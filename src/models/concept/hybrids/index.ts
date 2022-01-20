import {IConcept, IConceptTag} from '../models';
import {ITag} from '../../tag/models';
import {IProfile} from '../../profile/models';
import {IPassword} from '../../password/models';
import {IUser} from '../../user/models';

export interface IConceptTag_Complete extends IConceptTag {
    concept: IConcept;
    tag: ITag;
}

export interface IConcept_Complete extends IConcept {
    user: IUser;
    ConceptTag?: IConceptTag_Complete[]
}