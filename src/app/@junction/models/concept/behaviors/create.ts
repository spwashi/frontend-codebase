import { IConcept } from "../models";
import { IUser } from "../../user/models";

export type CreateConceptInput = {
  title: IConcept["title"];
  src: IConcept["src"];
  contentType: IConcept["contentType"];
};

export type CreateConceptMutationInput = {
  concept: CreateConceptInput;
  user: { id: IUser["id"] };
};
