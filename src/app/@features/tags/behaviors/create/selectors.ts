import { CreateTagMutationInput } from "@junction/models/tag/behaviors/create";
import { IUser } from "@junction/models/user/models";

export type SelectMutationInputData = {
  title: string;
  description: string;
  domain: string;
  user: IUser;
};

export const selectCreateTagInput = (
  data: SelectMutationInputData
): CreateTagMutationInput => {
  const { title, domain, user, description } = data ?? {};

  return {
    tag: {
      title,
      domain,
      description,
    },
    user: { id: user.id },
  };
};
