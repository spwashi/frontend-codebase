import {IUser} from '../../../../../models/user/IUser';
import {IConcept} from '../../../../../models/concept/models/IConcept';
import {ITag} from '../../../../../models/tag/models/ITag';

type SelectMutationInputData = {
    username: string;
    user: IUser;
    concept: IConcept;
    tags: ITag[]
}


export function selectTagAdditionInput(data: SelectMutationInputData) {
    const {username, user, concept: {title}, tags} = data ?? {};

    return {
        title,
        user: {username: user?.username ?? username},
        tags,
    };
}