import { IAdminFeatureID } from "./admin/ids";
import { IAssetFeatureID } from "./assets/ids";
import { IConceptFeatureID } from "./concepts/ids";
import { IEventFeatureID } from "./events/ids";
import { IProjectFeatureID } from "./projects/ids";
import { ISceneFeatureID } from "./scenes/ids";
import { ITagFeatureID } from "./tags/ids";
import { IUserFeatureID } from "./users/ids";

export type IExtantFeatureID =
  | IAdminFeatureID
  | IAssetFeatureID
  | IConceptFeatureID
  | IEventFeatureID
  | IProjectFeatureID
  | ISceneFeatureID
  | ITagFeatureID
  | IUserFeatureID;
