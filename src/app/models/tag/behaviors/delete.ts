import {ITag} from '../models';

export type DeleteTagInput = {
    id: ITag['id'];
}

export type DeleteTagMutationInput = {
    tag: DeleteTagInput
};