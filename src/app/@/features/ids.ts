import { IConventionalFeatureID as id } from "@widgets/feature/types/id";
import { admin } from "@/features/admin/admin";
import { asset } from "@/features/assets/asset";
import { concept } from "@/features/concepts/concept";
import { event } from "@/features/events/event";
import { project } from "@/features/projects/project";
import { scene } from "@/features/scenes/scene";
import { tag } from "@/features/tags/tag";
import { user } from "@/features/users/user";

export const featureIDs = {
  admin,
  asset,
  concept,
  event,
  project,
  scene,
  tag,
  user,
};

export const featureId__adminPreLogin: id = admin.prelogin_admin;
export const featureId__adminPostLogin: id = admin.postlogin_admin;

export const featureId__assets: id = asset.assets;
export const featureId__assetDisplay: id = asset.display;
export const featureId__assetDisplayForm: id = asset.display_form;
export const featureId__assetUploadForm: id = asset.upload_form;

export const featureId__concepts: id = concept.concepts;
export const featureId__conceptDisplay: id = concept.display;
export const featureId__conceptDisplayForm: id = concept.display_form;
export const featureId__conceptCreateForm: id = concept.create_form;
export const featureId__conceptEditForm: id = concept.edit_form;
export const featureId__conceptTagForm: id = concept.tag_form;

export const featureId__events: id = event.events;
export const featureId__eventDisplay: id = event.display;
export const featureId__eventCreateForm: id = event.create_form;
export const featureId__eventEditForm: id = event.edit_form;
export const featureId__eventTagForm: id = event.tag_form;
export const featureId__eventDisplayForm: id = event.display_form;

export const featureId__projects: id = project.projects;
export const featureId__projectDisplay: id = project.display;
export const featureId__projectCreate: id = project.create;

export const featureId__scenes: id = scene.scenes;
export const featureId__sceneDisplay: id = scene.display;
export const featureId__sceneCreateForm: id = scene.create_form;
export const featureId__sceneEditForm: id = scene.edit_form;

export const featureId__tags: id = tag.tags;
export const featureId__tagDisplay: id = tag.display;
export const featureId__tagCreateForm: id = tag.create_form;
export const featureId__tagsDisplayForm: id = tag.display_form;

export const featureId__users: id = user.users;
export const featureId__userSignup: id = user.user_signup;
export const featureId__userSignupForm: id = user.signup_form;
export const featureId__userLogin: id = user.login;
export const featureId__userLoginForm: id = user.login_form;
export const featureId__userLoginVerify: id = user.login_verify;
