import { IEvent } from "../models";
import { ITag } from "../../tag/models";

export type UntagEventMutationInput = {
  event: {
    id: IEvent["id"];
  };
  tags: ITag[];
};
