import { adminIds } from "./admin/ids";
import { appIds } from "./app/ids";
import { assetIds } from "./assets/ids";
import { conceptIds } from "./concepts/ids";
import { eventIds } from "./events/ids";
import { projectIds } from "./projects/ids";
import { sceneIds } from "./scenes/ids";
import { tagIds } from "./tags/ids";
import { userIds } from "./users/ids";
import { forumIds } from "./demo/forum/ids";

export const featureIds = <const>{
  forum: forumIds,
  app: appIds,
  admin: adminIds,
  asset: assetIds,
  concept: conceptIds,
  event: eventIds,
  project: projectIds,
  scene: sceneIds,
  tag: tagIds,
  user: userIds,
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
