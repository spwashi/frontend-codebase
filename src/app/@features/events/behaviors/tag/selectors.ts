import { TagEventMutationInput } from "@junction/models/event/behaviors/tag";
import { IEvent } from "@junction/models/event/models";
import { ITag } from "@junction/models/tag/models";

type TagEventFormData = {
  event: IEvent;
  tags: ITag[];
};

export const selectTagAdditionInput = (
  data: TagEventFormData
): TagEventMutationInput => {
  const {
    event: { id },
    tags,
  } = data ?? {};
  return {
    event: { id },
    tags: tags.map(({ id }) => ({ id })),
  };
};
