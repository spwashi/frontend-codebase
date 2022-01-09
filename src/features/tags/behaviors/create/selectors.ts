import {FormConfig} from '../../../../components/form/Factory';

export type SelectMutationInputData = {
    title: string;
    description: string;
    username: string;
    domain: string;
    user?: { username: string }
}

export const form__createTag: FormConfig = {
    title: 'Create Tag',
    items: [
        {title: 'User', name: 'user', type: 'user'},
        {title: 'Title', name: 'title', type: 'text'},
        {title: 'Domain', name: 'domain', type: 'text'},
        {title: 'Description', name: 'description', type: 'longtext'},
    ],
};

export function selectCreateTagInput(data: SelectMutationInputData) {
    const {title, domain, user, username, description} = data ?? {};

    return {
        title,
        domain,
        description,
        user: {
            username: user?.username ?? username,
        },
    };
}