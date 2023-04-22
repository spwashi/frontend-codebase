import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { IFeatureState, IKeyedState } from "@services/redux/types/state.types";
import { Tag } from "../../../../../__generated__/graphql";

export type TagOption = SelectOption<Tag["id"]>;
export type TagFeatureStateDataTags = {
  list: Tag[];
  lastFetched: number | null;
};
export type TagFeatureData = { tags: TagFeatureStateDataTags };
export type TagFeatureState = IFeatureState<TagFeatureData> & IKeyedState;
