import {IUser} from '../../../../app/models/user/models';
import {IConcept} from '../../../../app/models/concept/models';
import {ITag} from '../../../../app/models/tag/models';
import {FormConfig} from '../../../../components/form/Factory';
import {conceptInput, tagsInput, userInput} from '../../data/config';

type TagConceptFormData = {
    username: string;
    user: IUser;
    concept: IConcept;
    tags: ITag[]
}

interface TagConceptMutationInput {
    title: string;
    user: { username: string };
    tags: { title: string, domain?: string }[];
}

export const form__tagConcept: FormConfig = {
    title: 'Tag Concept',
    items: [
        userInput,
        conceptInput,
        tagsInput,
    ],
};

export const selectTagAdditionInput =
                 (data: TagConceptFormData): TagConceptMutationInput => {
                     const {username, user, concept: {title}, tags} = data ?? {};
                     return {
                         title,
                         user: {username: user?.username ?? username},
                         tags: tags.map(({title, domain}) => ({title, domain})),
                     };
                 };