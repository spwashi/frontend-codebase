import { IUser } from "@junction/models/user/models";
import { CreateEventMutationInput } from "@junction/models/event/behaviors/create";

export type CreateEventFormData = {
  username: string;
  user: IUser;
  title: string;
  start: string;
  end: string;
  description: string;
};
export const selectCreateEventInput = (
  data: CreateEventFormData
): CreateEventMutationInput => {
  const { user, title, start, end, description } = data ?? {};
  return {
    event: {
      title,
      end,
      description,
      start,
    },
    user: { id: user.id },
  };
};
