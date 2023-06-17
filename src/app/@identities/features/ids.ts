import { adminFeatureIds } from "./admin/ids";
import { appFeatureIds } from "./app/ids";
import { assetFeatureIds } from "./assets/ids";
import { conceptFeatureIds } from "./concepts/ids";
import { eventFeatureIds } from "./events/ids";
import { projectFeatureIds } from "./projects/ids";
import { sceneFeatureIds } from "./scenes/ids";
import { tagFeatureIds } from "./tags/ids";
import { userFeatureIds } from "./users/ids";
import { forumFeatureIds } from "./demo/forum/ids";

export const featureIds = <const>{
  forum: forumFeatureIds,
  app: appFeatureIds,
  admin: adminFeatureIds,
  asset: assetFeatureIds,
  concept: conceptFeatureIds,
  event: eventFeatureIds,
  project: projectFeatureIds,
  scene: sceneFeatureIds,
  tag: tagFeatureIds,
  user: userFeatureIds,
};
export const featureIdList = <const>[
  ...Object.values(featureIds.forum),
  ...Object.values(featureIds.app),
  ...Object.values(featureIds.admin),
  ...Object.values(featureIds.asset),
  ...Object.values(featureIds.concept),
  ...Object.values(featureIds.event),
  ...Object.values(featureIds.project),
  ...Object.values(featureIds.scene),
  ...Object.values(featureIds.tag),
  ...Object.values(featureIds.user),
];
