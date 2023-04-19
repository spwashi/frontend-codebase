import { ITag } from "../models";
import { IUser } from "../../user/models";

export type CreateTagInput = {
  title: ITag["title"];
  domain: ITag["domain"];
  description: ITag["description"];
};

export type CreateTagMutationInput = {
  tag: CreateTagInput;
  user: { id: IUser["id"] };
};
