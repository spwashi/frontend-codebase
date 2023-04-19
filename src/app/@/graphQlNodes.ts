// Assets
import {gqlNode_ASSET_FETCH_LIST} from '@features/assets/services/graphql/list/queries/fetchList';
import {gqlNode_ASSET_FETCH_ONE} from '@features/assets/services/graphql/one/queries/fetchOne';
// Concepts
import {gqlNode_CONCEPT_CREATE} from '@features/concepts/services/graphql/one/mutations/create';
import {gqlNode_CONCEPT_DELETE} from '@features/concepts/services/graphql/one/mutations/delete';
import {gqlNode_CONCEPT_EDIT} from '@features/concepts/services/graphql/one/mutations/edit';
import {gqlNode_CONCEPT_FETCH_LIST} from '@features/concepts/services/graphql/list/queries/fetchList';
import {gqlNode_CONCEPT_FETCH_ONE} from '@features/concepts/services/graphql/one/queries/fetchOne';
import {gqlNode_CONCEPT_TAG} from '@features/concepts/services/graphql/one/mutations/tag';
import {gqlNode_CONCEPT_UNTAG} from '@features/concepts/services/graphql/one/mutations/untag';
// Events
import {gqlNode_EVENT_CREATE} from '@features/events/services/graphql/one/mutations/create';
import {gqlNode_EVENT_DELETE} from '@features/events/services/graphql/one/mutations/delete';
import {gqlNode_EVENT_EDIT} from '@features/events/services/graphql/one/mutations/edit';
import {gqlNode_EVENT_FETCH_LIST} from '@features/events/services/graphql/list/queries/fetchList';
import {gqlNode_EVENT_FETCH_ONE} from '@features/events/services/graphql/one/queries/fetchOne';
import {gqlNode_EVENT_TAG} from '@features/events/services/graphql/one/mutations/tag';
import {gqlNode_EVENT_UNTAG} from '@features/events/services/graphql/one/mutations/untag';
// Projects
import {gqlNode_PROJECT_CREATE} from '@features/projects/services/graphql/one/mutations/create';
import {gqlNode_PROJECT_FETCH_LIST} from '@features/projects/services/graphql/list/queries/fetchList';
import {gqlNode_PROJECT_FETCH_ONE} from '@features/projects/services/graphql/one/queries/fetchOne';
// Scenes
import {gqlNode_SCENE_CREATE} from '@features/scenes/services/graphql/one/mutations/create';
import {gqlNode_SCENE_DELETE} from '@features/scenes/services/graphql/one/mutations/delete';
import {gqlNode_SCENE_EDIT} from '@features/scenes/services/graphql/one/mutations/edit';
import {gqlNode_SCENE_FETCH_LIST} from '@features/scenes/services/graphql/list/queries/fetchList';
import {gqlNode_SCENE_FETCH_ONE} from '@features/scenes/services/graphql/one/queries/fetchOne';
import {gqlNode_SCENE_UNTAG} from '@features/scenes/services/graphql/one/mutations/untag';
// Tags
import {gqlNode_TAG_CREATE} from '@features/tags/services/graphql/one/mutations/create';
import {gqlNode_TAG_DELETE} from '@features/tags/services/graphql/one/mutations/delete';
import {gqlNode_TAG_FETCH_LIST} from '@features/tags/services/graphql/list/queries/fetchList';
import {gqlNode_TAG_FETCH_ONE} from '@features/tags/services/graphql/one/queries/fetchOne';
// Users
import {gqlNode_USER_FETCH_LIST} from '@features/users/services/graphql/list/queries/fetchList';
import {gqlNode_USER_LOGIN} from '@features/users/services/graphql/one/mutations/login';
import {gqlNode_USER_SIGNUP} from '@features/users/services/graphql/one/mutations/signup';

export const allQueries =
               {
                 gqlNode_PROJECT_FETCH_LIST,
                 gqlNode_ASSET_FETCH_ONE,
                 gqlNode_CONCEPT_DELETE,
                 gqlNode_EVENT_DELETE,
                 gqlNode_SCENE_DELETE,
                 gqlNode_CONCEPT_FETCH_LIST,
                 gqlNode_EVENT_FETCH_LIST,
                 gqlNode_SCENE_FETCH_LIST,
                 gqlNode_CONCEPT_FETCH_ONE,
                 gqlNode_EVENT_FETCH_ONE,
                 gqlNode_SCENE_FETCH_ONE,
                 gqlNode_LOGIN:  gqlNode_USER_LOGIN,
                 gqlNode_CONCEPT_UNTAG,
                 gqlNode_EVENT_UNTAG,
                 gqlNode_SCENE_UNTAG,
                 gqlNode_TAG_FETCH_LIST,
                 gqlNode_TAG_DELETE,
                 gqlNode_USER_FETCH_LIST,
                 gqlNode_CONCEPT_CREATE,
                 gqlNode_CONCEPT_EDIT,
                 gqlNode_CONCEPT_TAG,
                 gqlNode_EVENT_CREATE,
                 gqlNode_EVENT_EDIT,
                 gqlNode_EVENT_TAG,
                 gqlNode_SCENE_CREATE,
                 gqlNode_SCENE_EDIT,
                 gqlNode_PROJECT_CREATE,
                 gqlNode_TAG_CREATE,
                 gqlNode_PROJECT_FETCH_ONE,
                 gqlNode_TAG_FETCH_ONE,
                 gqlNode_ASSET_FETCH_LIST,
                 gqlNode_SIGNUP: gqlNode_USER_SIGNUP,
               }