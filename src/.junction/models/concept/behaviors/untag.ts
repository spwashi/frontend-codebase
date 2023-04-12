import {IConcept} from '../models';
import {ITag} from '../../tag/models';

export type UntagConceptMutationInput = {
  concept: {
    id: IConcept['id']
  };
  tags: ITag[]
};