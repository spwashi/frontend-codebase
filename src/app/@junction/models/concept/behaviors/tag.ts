import { ITagIdentifyingPartial } from "../../tag/models";
import { IConcept } from "../models";
import { IUser } from "../../user/models";

export interface TagConceptMutationInput {
  concept: { id: IConcept["id"] };
  user: { id: IUser["id"] };
  tags: ITagIdentifyingPartial[];
}
