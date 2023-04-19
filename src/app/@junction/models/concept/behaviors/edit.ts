import { IConcept } from "../models";

export type EditConceptInput = {
  id: IConcept["id"];
  title?: IConcept["title"];
  contentType?: IConcept["contentType"];
  src?: IConcept["src"];
};

export type EditConceptMutationInput = {
  concept: EditConceptInput;
};
