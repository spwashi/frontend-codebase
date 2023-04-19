import { CreateConceptMutationInput } from "@junction/models/concept/behaviors/create";
import { IUser } from "@junction/models/user/models";

export type CreateConceptFormData = {
  username: string;
  user: IUser;
  title: string;
  src: string;
  contentType: string;
};

export const selectCreateConceptInput = (
  data: CreateConceptFormData
): CreateConceptMutationInput => {
  const { user, title, src, contentType } = data ?? {};
  return {
    concept: {
      title,
      src,
      contentType,
    },
    user: {
      id: user?.id,
    },
  };
};
