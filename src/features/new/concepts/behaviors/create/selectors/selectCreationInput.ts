import {IUser} from '../../../../../../models/user/IUser';

export type SelectMutationInputData = {
    username: string;
    user: IUser;
    title: string;
    src: string;
    mimeType: string;
}

export function selectCreateConceptInput(data: SelectMutationInputData) {
    const {username, user, title, src, mimeType} = data ?? {};

    return {
        title,
        src,
        mimeType,
        user: {
            username: user?.username ?? username,
        },
    };
}