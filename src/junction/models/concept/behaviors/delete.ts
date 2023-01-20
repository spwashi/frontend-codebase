import {IConcept} from '../models';

export type DeleteConceptInput = {
    id: IConcept['id'];
}

export type DeleteConceptMutationInput = {
    concept: DeleteConceptInput
};