// Assets
import {gqlNode_ASSET_FINDALL} from '@features/assets/services/graphql/list/queries/list';
import {gqlNode_ASSET_FINDONE} from '@features/assets/services/graphql/one/queries/find';
// Concepts
import {gqlNode_CONCEPT_CREATE} from '@features/concepts/services/graphql/one/mutations/create';
import {gqlNode_CONCEPT_DELETE} from '@features/concepts/services/graphql/one/mutations/delete';
import {gqlNode_CONCEPT_EDIT} from '@features/concepts/services/graphql/one/mutations/edit';
import {gqlNode_CONCEPT_FINDALL} from '@features/concepts/services/graphql/list/queries/list';
import {gqlNode_CONCEPT_FINDONE} from '@features/concepts/services/graphql/one/queries/find';
import {gqlNode_CONCEPT_TAG} from '@features/concepts/services/graphql/one/mutations/tag';
import {gqlNode_CONCEPT_UNTAG} from '@features/concepts/services/graphql/one/mutations/untag';
// Events
import {gqlNode_EVENT_CREATE} from '@features/events/services/graphql/one/mutations/create';
import {gqlNode_EVENT_DELETE} from '@features/events/services/graphql/one/mutations/delete';
import {gqlNode_EVENT_EDIT} from '@features/events/services/graphql/one/mutations/edit';
import {gqlNode_EVENT_FINDALL} from '@features/events/services/graphql/list/queries/list';
import {gqlNode_EVENT_FINDONE} from '@features/events/services/graphql/one/queries/find';
import {gqlNode_EVENT_TAG} from '@features/events/services/graphql/one/mutations/tag';
import {gqlNode_EVENT_UNTAG} from '@features/events/services/graphql/one/mutations/untag';
// Projects
import {gqlNode_PROJECT_CREATE} from '@features/projects/services/graphql/one/mutations/create';
import {gqlNode_PROJECT_FINDALL} from '@features/projects/services/graphql/list/queries/list';
import {gqlNode_PROJECT_FINDONE} from '@features/projects/services/graphql/one/queries/find';
// Scenes
import {gqlNode_SCENE_CREATE} from '@features/scenes/services/graphql/one/mutations/create';
import {gqlNode_SCENE_DELETE} from '@features/scenes/services/graphql/one/mutations/delete';
import {gqlNode_SCENE_EDIT} from '@features/scenes/services/graphql/one/mutations/edit';
import {gqlNode_SCENE_FINDALL} from '@features/scenes/services/graphql/list/queries/list';
import {gqlNode_SCENE_FINDONE} from '@features/scenes/services/graphql/one/queries/find';
import {gqlNode_SCENE_UNTAG} from '@features/scenes/services/graphql/one/mutations/untag';
// Tags
import {gqlNode_TAG_CREATE} from '@features/tags/services/graphql/one/mutations/create';
import {gqlNode_TAG_DELETE} from '@features/tags/services/graphql/one/mutations/delete';
import {gqlNode_TAG_FINDALL} from '@features/tags/services/graphql/list/queries/list';
import {gqlNode_TAG_FINDONE} from '@features/tags/services/graphql/one/queries/find';
// Users
import {gqlNode_USER_FINDALL} from '@features/users/services/graphql/list/queries/list';
import {gqlNode_USER_LOGIN} from '@features/users/services/graphql/one/mutations/login';
import {gqlNode_USER_SIGNUP} from '@features/users/services/graphql/one/mutations/signup';


export const allQueries =
               {
                 gqlNode_PROJECT_FINDALL,
                 gqlNode_ASSET_FINDONE,
                 gqlNode_CONCEPT_DELETE,
                 gqlNode_EVENT_DELETE,
                 gqlNode_SCENE_DELETE,
                 gqlNode_CONCEPT_FINDALL,
                 gqlNode_EVENT_FINDALL,
                 gqlNode_SCENE_FINDALL,
                 gqlNode_CONCEPT_FINDONE,
                 gqlNode_EVENT_FINDONE,
                 gqlNode_SCENE_FINDONE,
                 gqlNode_LOGIN:  gqlNode_USER_LOGIN,
                 gqlNode_CONCEPT_UNTAG,
                 gqlNode_EVENT_UNTAG,
                 gqlNode_SCENE_UNTAG,
                 gqlNode_TAG_FINDALL,
                 gqlNode_TAG_DELETE,
                 gqlNode_USER_FINDALL,
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
                 gqlNode_PROJECT_FINDONE,
                 gqlNode_TAG_FINDONE,
                 gqlNode_ASSET_FINDALL,
                 gqlNode_SIGNUP: gqlNode_USER_SIGNUP,
               }