export interface ITag {
    id: number;
    title: string;
    domain?: string;
    userId: number;
    description?: string;
}

export interface ITagIdentifyingPartial {
    id: number
}