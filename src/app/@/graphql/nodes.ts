import { gqlNode_ASSET_FETCH_LIST } from "@features/assets/services/graphql/list/queries/fetchList";
import { gqlNode_ASSET_FETCH_ONE } from "@features/assets/services/graphql/one/queries/fetchOne";
import { gqlNode_CONCEPT_CREATE } from "@features/concepts/services/graphql/one/mutations/create";
import { gqlNode_CONCEPT_DELETE } from "@features/concepts/services/graphql/one/mutations/delete";
import { gqlNode_CONCEPT_EDIT } from "@features/concepts/services/graphql/one/mutations/edit";
import { gqlNode_CONCEPT_FETCH_LIST } from "@features/concepts/services/graphql/list/queries/fetchList";
import { gqlNode_CONCEPT_FETCH_ONE } from "@features/concepts/services/graphql/one/queries/fetchOne";
import { gqlNode_CONCEPT_TAG } from "@features/concepts/services/graphql/one/mutations/tag";
import { gqlNode_CONCEPT_UNTAG } from "@features/concepts/services/graphql/one/mutations/untag";
import { gqlNode_EVENT_CREATE } from "@features/events/services/graphql/one/mutations/create";
import { gqlNode_EVENT_DELETE } from "@features/events/services/graphql/one/mutations/delete";
import { gqlNode_EVENT_EDIT } from "@features/events/services/graphql/one/mutations/edit";
import { gqlNode_EVENT_FETCH_LIST } from "@features/events/services/graphql/list/queries/fetchList";
import { gqlNode_EVENT_FETCH_ONE } from "@features/events/services/graphql/one/queries/fetchOne";
import { gqlNode_EVENT_TAG } from "@features/events/services/graphql/one/mutations/tag";
import { gqlNode_EVENT_UNTAG } from "@features/events/services/graphql/one/mutations/untag";
import { gqlNode_PROJECT_CREATE } from "@features/projects/services/graphql/one/mutations/create";
import { gqlNode_PROJECT_FETCH_LIST } from "@features/projects/services/graphql/list/queries/fetchList";
import { gqlNode_PROJECT_FETCH_ONE } from "@features/projects/services/graphql/one/queries/fetchOne";
import { gqlNode_SCENE_CREATE } from "@features/scenes/services/graphql/one/mutations/create";
import { gqlNode_SCENE_DELETE } from "@features/scenes/services/graphql/one/mutations/delete";
import { gqlNode_SCENE_EDIT } from "@features/scenes/services/graphql/one/mutations/edit";
import { gqlNode_SCENE_FETCH_LIST } from "@features/scenes/services/graphql/list/queries/fetchList";
import { gqlNode_SCENE_FETCH_ONE } from "@features/scenes/services/graphql/one/queries/fetchOne";
import { gqlNode_SCENE_UNTAG } from "@features/scenes/services/graphql/one/mutations/untag";
import { gqlNode_TAG_CREATE } from "@features/tags/services/graphql/one/mutations/create";
import { gqlNode_TAG_DELETE } from "@features/tags/services/graphql/one/mutations/delete";
import { gqlNode_TAG_FETCH_LIST } from "@features/tags/services/graphql/list/queries/fetchList";
import { gqlNode_TAG_FETCH_ONE } from "@features/tags/services/graphql/one/queries/fetchOne";
import { gqlNode_USER_LOGIN } from "@features/users/services/graphql/one/mutations/login";
import { gqlNode_USER_SIGNUP } from "@features/users/services/graphql/one/mutations/signup";

export const graphQlNodes = {
  asset: {
    fetchList: gqlNode_ASSET_FETCH_LIST,
    fetch: gqlNode_ASSET_FETCH_ONE,
  },
  concept: {
    create: gqlNode_CONCEPT_CREATE,
    delete: gqlNode_CONCEPT_DELETE,
    edit: gqlNode_CONCEPT_EDIT,
    fetchList: gqlNode_CONCEPT_FETCH_LIST,
    fetch: gqlNode_CONCEPT_FETCH_ONE,
    tag: gqlNode_CONCEPT_TAG,
    untag: gqlNode_CONCEPT_UNTAG,
  },
  event: {
    create: gqlNode_EVENT_CREATE,
    delete: gqlNode_EVENT_DELETE,
    edit: gqlNode_EVENT_EDIT,
    fetchList: gqlNode_EVENT_FETCH_LIST,
    fetch: gqlNode_EVENT_FETCH_ONE,
    tag: gqlNode_EVENT_TAG,
    untag: gqlNode_EVENT_UNTAG,
  },
  project: {
    create: gqlNode_PROJECT_CREATE,
    fetchList: gqlNode_PROJECT_FETCH_LIST,
    fetch: gqlNode_PROJECT_FETCH_ONE,
  },
  scene: {
    create: gqlNode_SCENE_CREATE,
    delete: gqlNode_SCENE_DELETE,
    edit: gqlNode_SCENE_EDIT,
    fetchList: gqlNode_SCENE_FETCH_LIST,
    fetch: gqlNode_SCENE_FETCH_ONE,
    untag: gqlNode_SCENE_UNTAG,
  },
  tag: {
    create: gqlNode_TAG_CREATE,
    delete: gqlNode_TAG_DELETE,
    fetchList: gqlNode_TAG_FETCH_LIST,
    fetch: gqlNode_TAG_FETCH_ONE,
  },
  user: {
    login: gqlNode_USER_LOGIN,
    signup: gqlNode_USER_SIGNUP,
  },
};
