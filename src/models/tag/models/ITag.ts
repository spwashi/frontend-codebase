export interface ITag {
    id: number;
    title: string;
    domain?: string;
    authorId: number;
    description?: string;
}

export interface ITagIdentifyingPartial {
    title: string;
    domain?: string;
}