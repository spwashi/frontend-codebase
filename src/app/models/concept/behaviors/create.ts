import {IConcept} from '../models';
import {IUser} from '../../user/models';

export type CreateConceptInput = {
    title: IConcept['title'];
    src: IConcept['src'];
    mimeType: IConcept['mimeType'];
};

export type CreateConceptMutationInput = {
    concept: CreateConceptInput;
    user: { id: IUser['id'] }
};