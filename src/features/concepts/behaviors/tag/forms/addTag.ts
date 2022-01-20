import {IUser} from '../../../../../models/user/models';
import {IConcept} from '../../../../../models/concept/models';
import {ITag} from '../../../../../models/tag/models';
import {FormConfig} from '../../../../../components/form/Factory';

type SelectMutationInputData = {
    username: string;
    user: IUser;
    concept: IConcept;
    tags: ITag[]
}

export const form__tagConcept: FormConfig = {
    title: 'Tag Concept',
    items: [
        {title: 'User', name: 'user', type: 'user'},
        {title: 'Concept', name: 'concept', type: 'concept'},
        {title: 'Tags', name: 'tags', type: 'tags'},
    ],
};


export function selectTagAdditionInput(data: SelectMutationInputData) {
    const {username, user, concept: {title}, tags} = data ?? {};
console.log(data);
    return {
        title,
        user: {username: user?.username ?? username},
        tags: tags.map(({title, domain}) => ({title, domain})),
    };
}