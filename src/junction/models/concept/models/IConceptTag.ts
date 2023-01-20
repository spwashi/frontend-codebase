type IConceptTagId = number;
type IConceptTagConceptId = number;
type IConceptTagTagId = number;

export interface IConceptTag {
    id: IConceptTagId;
    conceptId: IConceptTagConceptId;
    tagId: IConceptTagTagId;
}