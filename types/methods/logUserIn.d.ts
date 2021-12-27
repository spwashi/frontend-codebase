export declare function logUserIn(userInput: {
    username: string;
}, passwordInput: {
    password: string;
}): Promise<{
    jwt: string;
    username: string;
}>;
