import { ITag } from "../models";

export type EditTagInput = {
  id: ITag["id"];
  title?: ITag["title"];
  domain?: ITag["domain"];
  description?: ITag["description"];
};

export type EditTagMutationInput = {
  tag: EditTagInput;
};
