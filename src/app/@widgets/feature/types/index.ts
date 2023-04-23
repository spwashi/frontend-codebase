import { IConventionalFeatureID } from "@widgets/feature/types/id";
import { IExtantFeatureID } from "@/features/types";

// todo
type IRealFeatureID = IConventionalFeatureID & IExtantFeatureID;
export type IFeature = { featureId: IRealFeatureID };
