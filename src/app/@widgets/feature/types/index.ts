import { IExtantFeatureID } from "@/features/types";
import { IConventionalFeatureID } from "@widgets/feature/types/id";

type IRealFeatureID = IConventionalFeatureID & IExtantFeatureID;
export type IFeature = { featureId: IRealFeatureID };
