export interface IConceptIdentifyingPartial {
    id: string
}

type IConceptId = string;
type IConceptTitle = string;
type IConceptSrc = string;
type IConceptCategory = string;
type IConceptPublished = string;
type IConceptMimeType = string;
type IConceptUserId = number;
type IConceptPasswordId = number;

export interface IConcept {
    id: IConceptId;
    title: IConceptTitle;
    category: IConceptCategory;
    src: IConceptSrc;
    mimeType: IConceptMimeType;
    published: IConceptPublished;
    userid: IConceptUserId;
    passwordId: IConceptPasswordId;
}