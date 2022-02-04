import {IConcept} from '../models';

export type EditConceptInput = {
    id: IConcept['id'];
    title?: IConcept['title'];
    mimeType?: IConcept['mimeType']
    src?: IConcept['src']
}

export type EditConceptMutationInput = {
    concept: EditConceptInput
};