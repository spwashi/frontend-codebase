import { IEvent } from "../models";

export type DeleteEventInput = {
  id: IEvent["id"];
};

export type DeleteEventMutationInput = {
  event: DeleteEventInput;
};
