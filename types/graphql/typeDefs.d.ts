export declare const typeDefs: import("graphql").DocumentNode;
export declare type UserInput = {
    username: string;
    name?: string;
};
export declare type ProjectInput = {
    name: string;
    title?: string;
};
export declare type TagInput = {
    title: string;
    domain?: string;
};
export declare type ConceptInput = {
    title: string;
    mimeType?: string;
    src?: string;
};
export declare type File = {
    name: string;
    realname: string;
};
export declare type Concept = {
    title: string;
    mimeType: string;
    src: string;
    author: UserInput;
};
export declare type Project = {
    title: string;
    name: string;
};
export declare type Tag = {
    title: string;
    domain: string;
    author: UserInput;
};
export declare type PasswordInput = {
    password: string;
    passwordConfirm?: string;
};
