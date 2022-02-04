import {ITagIdentifyingPartial} from '../../tag/models';
import {IUser} from '../../user/models';
import {IConcept} from '../models';

export interface TagConceptMutationInput {
    concept: { id: IConcept['id'] } & { user: { id: IUser['id'] } };
    tags: ITagIdentifyingPartial[];
}