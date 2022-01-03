export type SelectMutationInputData = {
    title: string;
    description: string;
    username: string;
    domain: string;
    user?: { username: string }
}

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