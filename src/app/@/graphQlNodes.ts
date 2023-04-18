// Mutations  t
import {gqlMutationNode_CREATE_CONCEPT} from '@features/concepts/behaviors/create/mutation';
import {gqlMutationNode_CREATE_EVENT} from '@features/events/behaviors/create/mutation';
import {gqlMutationNode_CREATE_PROJECT} from '@features/projects/behaviors/create/mutations';
import {gqlMutationNode_CREATE_SCENE} from '@features/scenes/behaviors/create/mutation';
import {gqlMutationNode_CREATE_TAG} from '@features/tags/behaviors/create/mutations';
import {gqlMutationNode_DELETE_CONCEPT} from '@features/concepts/services/graphql/one/components/DeleteButton';
import {gqlMutationNode_DELETE_EVENT} from '@features/events/services/graphql/one/components/DeleteButton';
import {gqlMutationNode_DELETE_SCENE} from '@features/scenes/services/graphql/one/components/DeleteSceneButton';
import {gqlMutationNode_DELETE_TAG} from '@features/tags/services/graphql/one';
import {gqlMutationNode_EDIT_CONCEPT} from '@features/concepts/behaviors/edit/mutation';
import {gqlMutationNode_EDIT_EVENT} from '@features/events/behaviors/edit/mutation';
import {gqlMutationNode_EDIT_SCENE} from '@features/scenes/behaviors/edit/mutation';
import {gqlMutationNode_LOGIN} from '@features/users/behaviors/login/selectors';
import {gqlMutationNode_SIGNUP} from '@features/users/behaviors/signup/forms/SignupForm/SignupForm';
import {gqlMutationNode_TAG_CONCEPT} from '@features/concepts/behaviors/tag/mutation';
import {gqlMutationNode_TAG_EVENT} from '@features/events/behaviors/tag/mutation';
import {gqlMutationNode_UNTAG_CONCEPT} from '@features/concepts/services/graphql/one/components/join/tag';
import {gqlMutationNode_UNTAG_EVENT} from '@features/events/services/graphql/one/components/join/tag';
import {gqlMutationNode_UNTAG_SCENE} from '@features/scenes/services/graphql/one/components/join/tag';
// Queries
import {gqlQueryNode_ASSET_LIST} from '@features/assets/components/form/Select';
import {gqlQueryNode_ASSET} from '@features/assets/services/graphql/queries/AssetQuery';
import {gqlQueryNode_CONCEPT_LIST} from '@features/concepts/services/graphql/all/components/FindAll';
import {gqlQueryNode_CONCEPT} from '@features/concepts/services/graphql/one/components/FindOne';
import {gqlQueryNode_EVENT_LIST} from '@features/events/services/graphql/all/components/FindAll';
import {gqlQueryNode_EVENT} from '@features/events/services/graphql/one/components/FindOne';
import {gqlQueryNode_PROJECT_LIST} from '@features/projects/services/graphql/all/all';
import {gqlQueryNode_PROJECT} from '@features/projects/services/graphql/one/components/Query';
import {gqlQueryNode_SCENE_LIST} from '@features/scenes/services/graphql/all/components/FindAll';
import {gqlQueryNode_SCENE} from '@features/scenes/services/graphql/one/components/FindOne';
import {gqlQueryNode_TAG_LIST} from '@features/tags/services/graphql/all';
import {gqlQueryNode_TAG} from '@features/tags/services/graphql/one/components/Query';
import {gqlQueryNode_USER_LIST} from '@features/users/services/graphql/all';

export const allQueries =
               {
                 gqlQueryNode_PROJECT_LIST,
                 gqlQueryNode_ASSET,
                 gqlMutationNode_DELETE_CONCEPT,
                 gqlMutationNode_DELETE_EVENT,
                 gqlMutationNode_DELETE_SCENE,
                 gqlQueryNode_CONCEPT_LIST,
                 gqlQueryNode_EVENT_LIST,
                 gqlQueryNode_SCENE_LIST,
                 gqlQueryNode_CONCEPT,
                 gqlQueryNode_EVENT,
                 gqlQueryNode_SCENE,
                 gqlMutationNode_LOGIN,
                 gqlMutationNode_UNTAG_CONCEPT,
                 gqlMutationNode_UNTAG_EVENT,
                 gqlMutationNode_UNTAG_SCENE,
                 gqlQueryNode_TAG_LIST,
                 gqlMutationNode_DELETE_TAG,
                 gqlQueryNode_USER_LIST,
                 gqlMutationNode_CREATE_CONCEPT,
                 gqlMutationNode_EDIT_CONCEPT,
                 gqlMutationNode_TAG_CONCEPT,
                 gqlMutationNode_CREATE_EVENT,
                 gqlMutationNode_EDIT_EVENT,
                 gqlMutationNode_TAG_EVENT,
                 gqlMutationNode_CREATE_SCENE,
                 gqlMutationNode_EDIT_SCENE,
                 gqlMutationNode_CREATE_PROJECT,
                 gqlMutationNode_CREATE_TAG,
                 gqlQueryNode_PROJECT,
                 gqlQueryNode_TAG,
                 gqlQueryNode_ASSET_LIST,
                 gqlMutationNode_SIGNUP,
               }