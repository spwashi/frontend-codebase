import { featureIDs } from "@/features/ids";

type IFeatureIDs = typeof featureIDs;
type Groups = IFeatureIDs;
export type IExtantFeatureID = Groups[keyof Groups];
