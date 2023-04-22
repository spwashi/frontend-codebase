import { IFeatureState, IKeyedState } from "@services/redux/types/state.types";
import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { Project } from "../../../../../__generated__/graphql";

export type ProjectOption = SelectOption<Project["id"]>;
export type ProjectFeatureStateDataProjects = {
  list: Project[];
  lastFetched: number | null;
};
export type ProjectFeatureData = { projects: ProjectFeatureStateDataProjects };
export type ProjectFeatureState = IFeatureState<ProjectFeatureData> &
  IKeyedState<{ project?: Project }>;
