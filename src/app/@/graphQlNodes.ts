import {PROJECT_LIST_QUERY} from '@features/projects/services/graphql/all/all';
import {ASSET_QUERY} from '@features/assets/services/graphql/queries/AssetQuery';
import {DELETE_CONCEPT_MUTATION} from '@features/concepts/services/graphql/one/components/DeleteButton';
import {DELETE_EVENT_MUTATION} from '@features/events/services/graphql/one/components/DeleteButton';
import {DELETE_SCENE_MUTATION} from '@features/scenes/services/graphql/one/components/DeleteSceneButton';
import {CONCEPT_LIST_QUERY} from '@features/concepts/services/graphql/all/components/FindAll';
import {EVENT_LIST_QUERY} from '@features/events/services/graphql/all/components/FindAll';
import {SCENE_LIST_QUERY} from '@features/scenes/services/graphql/all/components/FindAll';
import {CONCEPT_QUERY} from '@features/concepts/services/graphql/one/components/FindOne';
import {EVENT_QUERY} from '@features/events/services/graphql/one/components/FindOne';
import {SCENE_QUERY} from '@features/scenes/services/graphql/one/components/FindOne';
import {LOGIN_MUTATION} from '@features/users/behaviors/login/selectors';
import {UNTAG_CONCEPT_MUTATION} from '@features/concepts/services/graphql/one/components/join/tag';
import {UNTAG_EVENT_MUTATION} from '@features/events/services/graphql/one/components/join/tag';
import {UNTAG_SCENE_MUTATION} from '@features/scenes/services/graphql/one/components/join/tag';
import {TAG_LIST_QUERY} from '@features/tags/services/graphql/all';
import {DELETE_TAG_MUTATION} from '@features/tags/services/graphql/one';
import {USER_LIST_QUERY} from '@features/users/services/graphql/all';
import {EDIT_CONCEPT_MUTATION} from '@features/concepts/behaviors/edit/mutation';
import {CREATE_CONCEPT_MUTATION} from '@features/concepts/behaviors/create/mutation';
import {TAG_CONCEPT_MUTATION} from '@features/concepts/behaviors/tag/mutation';
import {CREATE_EVENT_MUTATION} from '@features/events/behaviors/create/mutation';
import {EDIT_EVENT_MUTATION} from '@features/events/behaviors/edit/mutation';
import {TAG_EVENT_MUTATION} from '@features/events/behaviors/tag/mutation';
import {CREATE_SCENE_MUTATION} from '@features/scenes/behaviors/create/mutation';
import {EDIT_SCENE_MUTATION} from '@features/scenes/behaviors/edit/mutation';
import {CREATE_PROJECT_MUTATION} from '@features/projects/behaviors/create/mutations';
import {CREATE_TAG_MUTATION} from '@features/tags/behaviors/create/mutations';
import {PROJECT_QUERY} from '@features/projects/services/graphql/one/components/Query';
import {TAG_QUERY} from '@features/tags/services/graphql/one/components/Query';
import {ASSET_LIST_QUERY} from '@features/assets/components/form/Select';
import {SIGNUP_MUTATION} from '@features/users/behaviors/signup/forms/SignupForm/SignupForm';

export const allQueries =
               {
                 PROJECT_LIST_QUERY,
                 ASSET_QUERY,
                 DELETE_CONCEPT_MUTATION,
                 DELETE_EVENT_MUTATION,
                 DELETE_SCENE_MUTATION,
                 CONCEPT_LIST_QUERY,
                 EVENT_LIST_QUERY,
                 SCENE_LIST_QUERY,
                 CONCEPT_QUERY,
                 EVENT_QUERY,
                 SCENE_QUERY,
                 LOGIN_MUTATION,
                 UNTAG_CONCEPT_MUTATION,
                 UNTAG_EVENT_MUTATION,
                 UNTAG_SCENE_MUTATION,
                 TAG_LIST_QUERY,
                 DELETE_TAG_MUTATION,
                 USER_LIST_QUERY,
                 CREATE_CONCEPT_MUTATION,
                 EDIT_CONCEPT_MUTATION,
                 TAG_CONCEPT_MUTATION,
                 CREATE_EVENT_MUTATION,
                 EDIT_EVENT_MUTATION,
                 TAG_EVENT_MUTATION,
                 CREATE_SCENE_MUTATION,
                 EDIT_SCENE_MUTATION,
                 CREATE_PROJECT_MUTATION,
                 CREATE_TAG_MUTATION,
                 PROJECT_QUERY,
                 TAG_QUERY,
                 ASSET_LIST_QUERY,
                 SIGNUP_MUTATION,
               }