import { adminIds } from "./admin/ids";
import { assetIds } from "./assets/ids";
import { conceptIds } from "./concepts/ids";
import { eventIds } from "./events/ids";
import { projectIds } from "./projects/ids";
import { sceneIds } from "./scenes/ids";
import { tagIds } from "./tags/ids";
import { userIds } from "./users/ids";

export const featureIdMap = <const>{
  admin: adminIds,
  asset: assetIds,
  concept: conceptIds,
  event: eventIds,
  project: projectIds,
  scene: sceneIds,
  tag: tagIds,
  user: userIds,
};
export const featureIds = <const>[
  ...Object.values(featureIdMap.admin),
  ...Object.values(featureIdMap.asset),
  ...Object.values(featureIdMap.concept),
  ...Object.values(featureIdMap.event),
  ...Object.values(featureIdMap.project),
  ...Object.values(featureIdMap.scene),
  ...Object.values(featureIdMap.tag),
  ...Object.values(featureIdMap.user),
];
