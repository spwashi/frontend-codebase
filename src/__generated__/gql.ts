/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateConcept($concept: CreateConceptInput!, $user: UserReferenceInput!) {\n  createConcept(user: $user, concept: $concept) {\n    __typename\n    id\n    title\n    src\n    published\n    contentType\n  }\n}": types.CreateConceptDocument,
    "mutation CreateEvent($event: CreateEventInput!, $user: UserReferenceInput) {\n  createEvent(event: $event, user: $user) {\n    id\n    title\n    description\n    published\n  }\n}": types.CreateEventDocument,
    "mutation CreateProject($project: CreateProjectInput!) {\n  createProject(project: $project) {\n    id\n    title\n    domain\n    description\n  }\n}": types.CreateProjectDocument,
    "mutation CreateScene($scene: CreateSceneInput!) {\n  createScene(scene: $scene) {\n    id\n    name\n    title\n    description\n  }\n}": types.CreateSceneDocument,
    "mutation CreateTag($tag: CreateTagInput!, $user: UserReferenceInput!) {\n  createTag(tag: $tag, user: $user) {\n    id\n    title\n    domain\n    description\n  }\n}": types.CreateTagDocument,
    "mutation DeleteConcept($concept: DeleteConceptInput!) {\n  deleteConcept(concept: $concept) {\n    id\n  }\n}": types.DeleteConceptDocument,
    "mutation DeleteEvent($event: DeleteEventInput!) {\n  deleteEvent(event: $event) {\n    id\n  }\n}": types.DeleteEventDocument,
    "mutation DeleteScene($scene: DeleteSceneInput!) {\n  deleteScene(scene: $scene) {\n    id\n  }\n}": types.DeleteSceneDocument,
    "mutation DeleteTag($user: UserReferenceInput!, $tag: DeleteTagInput!) {\n  deleteTag(tag: $tag, user: $user) {\n    title\n    domain\n  }\n}": types.DeleteTagDocument,
    "mutation EditConcept($concept: EditConceptInput!, $user: UserReferenceInput) {\n  editConcept(concept: $concept, user: $user) {\n    id\n    title\n    src\n    contentType\n    published\n  }\n}": types.EditConceptDocument,
    "mutation EditEvent($event: EditEventInput!, $user: UserReferenceInput) {\n  editEvent(event: $event, user: $user) {\n    id\n    title\n    description\n    start\n    startDate\n    end\n    endDate\n  }\n}": types.EditEventDocument,
    "mutation EditScene($scene: EditSceneInput!, $user: UserReferenceInput) {\n  editScene(scene: $scene, user: $user) {\n    id\n    name\n    title\n    description\n  }\n}": types.EditSceneDocument,
    "query FetchAsset($asset: AssetReferenceInput!) {\n  asset(asset: $asset) {\n    name\n    realname\n    contentType\n    uri\n  }\n}": types.FetchAssetDocument,
    "query FetchConcept($concept: ConceptReferenceInput!) {\n  concept(concept: $concept) {\n    id\n    title\n    src\n    contentType\n    conceptTags {\n      tag {\n        title\n        domain\n      }\n    }\n  }\n}": types.FetchConceptDocument,
    "query FetchEvent($event: EventReferenceInput!) {\n  event(event: $event) {\n    id\n    title\n    start\n    startDate\n    end\n    endDate\n    description\n    eventTags {\n      event {\n        id\n      }\n      tag {\n        id\n        title\n        domain\n      }\n    }\n  }\n}": types.FetchEventDocument,
    "query FetchProject($project: ProjectReferenceInput!) {\n  project(project: $project) {\n    id\n    title\n    domain\n    description\n  }\n}": types.FetchProjectDocument,
    "query FetchScene($scene: SceneReferenceInput!) {\n  scene(scene: $scene) {\n    id\n    name\n    title\n    description\n  }\n}": types.FetchSceneDocument,
    "query FetchTag($tag: TagReferenceInput!) {\n  tag(tag: $tag) {\n    id\n    domain\n    title\n    description\n  }\n}": types.FetchTagDocument,
    "query FetchAssetList($user: UserReferenceInput) {\n  assetList(user: $user) {\n    name\n    realname\n  }\n}": types.FetchAssetListDocument,
    "query FetchConceptList {\n  conceptList {\n    id\n    title\n    contentType\n    src\n    published\n  }\n}": types.FetchConceptListDocument,
    "query FetchEventList {\n  eventList {\n    id\n    title\n    start\n    startDate\n    end\n    endDate\n    description\n    published\n  }\n}": types.FetchEventListDocument,
    "query FetchProjectList($domain: String) {\n  projectList(domain: $domain) {\n    id\n    title\n    name\n    description\n    domain\n  }\n}": types.FetchProjectListDocument,
    "query FetchSceneList {\n  sceneList {\n    id\n    name\n    title\n    description\n  }\n}": types.FetchSceneListDocument,
    "query FetchTagList {\n  tagList {\n    id\n    title\n    domain\n  }\n}": types.FetchTagListDocument,
    "mutation LogIn($user: UserLoginInput!, $project: ProjectReferenceInput, $password: PasswordReferenceInput) {\n  logIn(user: $user, project: $project, password: $password) {\n    jwt\n    username\n    user {\n      id\n      name\n      username\n    }\n  }\n}": types.LogInDocument,
    "mutation SignUp($user: CreateUserInput!, $password: CreatePasswordInput!, $project: ProjectReferenceInput) {\n  signUp(user: $user, password: $password, project: $project) {\n    user {\n      id\n      name\n      username\n    }\n  }\n}": types.SignUpDocument,
    "mutation TagConcept($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {\n  tagConcept(concept: $concept, user: $user, tags: $tags) {\n    id\n  }\n}": types.TagConceptDocument,
    "mutation TagEvent($event: EventReferenceInput!, $user: UserReferenceInput!, $tags: [TagReferenceInput]) {\n  tagEvent(event: $event, user: $user, tags: $tags) {\n    __typename\n  }\n}": types.TagEventDocument,
    "mutation UntagConcept($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {\n  untagConcept(concept: $concept, user: $user, tags: $tags) {\n    id\n    concept {\n      id\n    }\n    tag {\n      id\n    }\n  }\n}": types.UntagConceptDocument,
    "mutation UntagEvent($event: EventReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {\n  untagEvent(event: $event, user: $user, tags: $tags) {\n    tag {\n      id\n    }\n    event {\n      id\n    }\n  }\n}": types.UntagEventDocument,
    "mutation UntagScene($scene: SceneReferenceInput!, $tags: [TagReferenceInput], $user: UserReferenceInput) {\n  untagScene(scene: $scene, tags: $tags, user: $user) {\n    scene {\n      id\n    }\n    tag {\n      id\n    }\n  }\n}": types.UntagSceneDocument,
};

/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = appGql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function appGql(source: string): unknown;

/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation CreateConcept($concept: CreateConceptInput!, $user: UserReferenceInput!) {\n  createConcept(user: $user, concept: $concept) {\n    __typename\n    id\n    title\n    src\n    published\n    contentType\n  }\n}"): (typeof documents)["mutation CreateConcept($concept: CreateConceptInput!, $user: UserReferenceInput!) {\n  createConcept(user: $user, concept: $concept) {\n    __typename\n    id\n    title\n    src\n    published\n    contentType\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation CreateEvent($event: CreateEventInput!, $user: UserReferenceInput) {\n  createEvent(event: $event, user: $user) {\n    id\n    title\n    description\n    published\n  }\n}"): (typeof documents)["mutation CreateEvent($event: CreateEventInput!, $user: UserReferenceInput) {\n  createEvent(event: $event, user: $user) {\n    id\n    title\n    description\n    published\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation CreateProject($project: CreateProjectInput!) {\n  createProject(project: $project) {\n    id\n    title\n    domain\n    description\n  }\n}"): (typeof documents)["mutation CreateProject($project: CreateProjectInput!) {\n  createProject(project: $project) {\n    id\n    title\n    domain\n    description\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation CreateScene($scene: CreateSceneInput!) {\n  createScene(scene: $scene) {\n    id\n    name\n    title\n    description\n  }\n}"): (typeof documents)["mutation CreateScene($scene: CreateSceneInput!) {\n  createScene(scene: $scene) {\n    id\n    name\n    title\n    description\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation CreateTag($tag: CreateTagInput!, $user: UserReferenceInput!) {\n  createTag(tag: $tag, user: $user) {\n    id\n    title\n    domain\n    description\n  }\n}"): (typeof documents)["mutation CreateTag($tag: CreateTagInput!, $user: UserReferenceInput!) {\n  createTag(tag: $tag, user: $user) {\n    id\n    title\n    domain\n    description\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation DeleteConcept($concept: DeleteConceptInput!) {\n  deleteConcept(concept: $concept) {\n    id\n  }\n}"): (typeof documents)["mutation DeleteConcept($concept: DeleteConceptInput!) {\n  deleteConcept(concept: $concept) {\n    id\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation DeleteEvent($event: DeleteEventInput!) {\n  deleteEvent(event: $event) {\n    id\n  }\n}"): (typeof documents)["mutation DeleteEvent($event: DeleteEventInput!) {\n  deleteEvent(event: $event) {\n    id\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation DeleteScene($scene: DeleteSceneInput!) {\n  deleteScene(scene: $scene) {\n    id\n  }\n}"): (typeof documents)["mutation DeleteScene($scene: DeleteSceneInput!) {\n  deleteScene(scene: $scene) {\n    id\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation DeleteTag($user: UserReferenceInput!, $tag: DeleteTagInput!) {\n  deleteTag(tag: $tag, user: $user) {\n    title\n    domain\n  }\n}"): (typeof documents)["mutation DeleteTag($user: UserReferenceInput!, $tag: DeleteTagInput!) {\n  deleteTag(tag: $tag, user: $user) {\n    title\n    domain\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation EditConcept($concept: EditConceptInput!, $user: UserReferenceInput) {\n  editConcept(concept: $concept, user: $user) {\n    id\n    title\n    src\n    contentType\n    published\n  }\n}"): (typeof documents)["mutation EditConcept($concept: EditConceptInput!, $user: UserReferenceInput) {\n  editConcept(concept: $concept, user: $user) {\n    id\n    title\n    src\n    contentType\n    published\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation EditEvent($event: EditEventInput!, $user: UserReferenceInput) {\n  editEvent(event: $event, user: $user) {\n    id\n    title\n    description\n    start\n    startDate\n    end\n    endDate\n  }\n}"): (typeof documents)["mutation EditEvent($event: EditEventInput!, $user: UserReferenceInput) {\n  editEvent(event: $event, user: $user) {\n    id\n    title\n    description\n    start\n    startDate\n    end\n    endDate\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation EditScene($scene: EditSceneInput!, $user: UserReferenceInput) {\n  editScene(scene: $scene, user: $user) {\n    id\n    name\n    title\n    description\n  }\n}"): (typeof documents)["mutation EditScene($scene: EditSceneInput!, $user: UserReferenceInput) {\n  editScene(scene: $scene, user: $user) {\n    id\n    name\n    title\n    description\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchAsset($asset: AssetReferenceInput!) {\n  asset(asset: $asset) {\n    name\n    realname\n    contentType\n    uri\n  }\n}"): (typeof documents)["query FetchAsset($asset: AssetReferenceInput!) {\n  asset(asset: $asset) {\n    name\n    realname\n    contentType\n    uri\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchConcept($concept: ConceptReferenceInput!) {\n  concept(concept: $concept) {\n    id\n    title\n    src\n    contentType\n    conceptTags {\n      tag {\n        title\n        domain\n      }\n    }\n  }\n}"): (typeof documents)["query FetchConcept($concept: ConceptReferenceInput!) {\n  concept(concept: $concept) {\n    id\n    title\n    src\n    contentType\n    conceptTags {\n      tag {\n        title\n        domain\n      }\n    }\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchEvent($event: EventReferenceInput!) {\n  event(event: $event) {\n    id\n    title\n    start\n    startDate\n    end\n    endDate\n    description\n    eventTags {\n      event {\n        id\n      }\n      tag {\n        id\n        title\n        domain\n      }\n    }\n  }\n}"): (typeof documents)["query FetchEvent($event: EventReferenceInput!) {\n  event(event: $event) {\n    id\n    title\n    start\n    startDate\n    end\n    endDate\n    description\n    eventTags {\n      event {\n        id\n      }\n      tag {\n        id\n        title\n        domain\n      }\n    }\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchProject($project: ProjectReferenceInput!) {\n  project(project: $project) {\n    id\n    title\n    domain\n    description\n  }\n}"): (typeof documents)["query FetchProject($project: ProjectReferenceInput!) {\n  project(project: $project) {\n    id\n    title\n    domain\n    description\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchScene($scene: SceneReferenceInput!) {\n  scene(scene: $scene) {\n    id\n    name\n    title\n    description\n  }\n}"): (typeof documents)["query FetchScene($scene: SceneReferenceInput!) {\n  scene(scene: $scene) {\n    id\n    name\n    title\n    description\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchTag($tag: TagReferenceInput!) {\n  tag(tag: $tag) {\n    id\n    domain\n    title\n    description\n  }\n}"): (typeof documents)["query FetchTag($tag: TagReferenceInput!) {\n  tag(tag: $tag) {\n    id\n    domain\n    title\n    description\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchAssetList($user: UserReferenceInput) {\n  assetList(user: $user) {\n    name\n    realname\n  }\n}"): (typeof documents)["query FetchAssetList($user: UserReferenceInput) {\n  assetList(user: $user) {\n    name\n    realname\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchConceptList {\n  conceptList {\n    id\n    title\n    contentType\n    src\n    published\n  }\n}"): (typeof documents)["query FetchConceptList {\n  conceptList {\n    id\n    title\n    contentType\n    src\n    published\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchEventList {\n  eventList {\n    id\n    title\n    start\n    startDate\n    end\n    endDate\n    description\n    published\n  }\n}"): (typeof documents)["query FetchEventList {\n  eventList {\n    id\n    title\n    start\n    startDate\n    end\n    endDate\n    description\n    published\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchProjectList($domain: String) {\n  projectList(domain: $domain) {\n    id\n    title\n    name\n    description\n    domain\n  }\n}"): (typeof documents)["query FetchProjectList($domain: String) {\n  projectList(domain: $domain) {\n    id\n    title\n    name\n    description\n    domain\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchSceneList {\n  sceneList {\n    id\n    name\n    title\n    description\n  }\n}"): (typeof documents)["query FetchSceneList {\n  sceneList {\n    id\n    name\n    title\n    description\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "query FetchTagList {\n  tagList {\n    id\n    title\n    domain\n  }\n}"): (typeof documents)["query FetchTagList {\n  tagList {\n    id\n    title\n    domain\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation LogIn($user: UserLoginInput!, $project: ProjectReferenceInput, $password: PasswordReferenceInput) {\n  logIn(user: $user, project: $project, password: $password) {\n    jwt\n    username\n    user {\n      id\n      name\n      username\n    }\n  }\n}"): (typeof documents)["mutation LogIn($user: UserLoginInput!, $project: ProjectReferenceInput, $password: PasswordReferenceInput) {\n  logIn(user: $user, project: $project, password: $password) {\n    jwt\n    username\n    user {\n      id\n      name\n      username\n    }\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation SignUp($user: CreateUserInput!, $password: CreatePasswordInput!, $project: ProjectReferenceInput) {\n  signUp(user: $user, password: $password, project: $project) {\n    user {\n      id\n      name\n      username\n    }\n  }\n}"): (typeof documents)["mutation SignUp($user: CreateUserInput!, $password: CreatePasswordInput!, $project: ProjectReferenceInput) {\n  signUp(user: $user, password: $password, project: $project) {\n    user {\n      id\n      name\n      username\n    }\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation TagConcept($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {\n  tagConcept(concept: $concept, user: $user, tags: $tags) {\n    id\n  }\n}"): (typeof documents)["mutation TagConcept($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {\n  tagConcept(concept: $concept, user: $user, tags: $tags) {\n    id\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation TagEvent($event: EventReferenceInput!, $user: UserReferenceInput!, $tags: [TagReferenceInput]) {\n  tagEvent(event: $event, user: $user, tags: $tags) {\n    __typename\n  }\n}"): (typeof documents)["mutation TagEvent($event: EventReferenceInput!, $user: UserReferenceInput!, $tags: [TagReferenceInput]) {\n  tagEvent(event: $event, user: $user, tags: $tags) {\n    __typename\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation UntagConcept($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {\n  untagConcept(concept: $concept, user: $user, tags: $tags) {\n    id\n    concept {\n      id\n    }\n    tag {\n      id\n    }\n  }\n}"): (typeof documents)["mutation UntagConcept($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {\n  untagConcept(concept: $concept, user: $user, tags: $tags) {\n    id\n    concept {\n      id\n    }\n    tag {\n      id\n    }\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation UntagEvent($event: EventReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {\n  untagEvent(event: $event, user: $user, tags: $tags) {\n    tag {\n      id\n    }\n    event {\n      id\n    }\n  }\n}"): (typeof documents)["mutation UntagEvent($event: EventReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {\n  untagEvent(event: $event, user: $user, tags: $tags) {\n    tag {\n      id\n    }\n    event {\n      id\n    }\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation UntagScene($scene: SceneReferenceInput!, $tags: [TagReferenceInput], $user: UserReferenceInput) {\n  untagScene(scene: $scene, tags: $tags, user: $user) {\n    scene {\n      id\n    }\n    tag {\n      id\n    }\n  }\n}"): (typeof documents)["mutation UntagScene($scene: SceneReferenceInput!, $tags: [TagReferenceInput], $user: UserReferenceInput) {\n  untagScene(scene: $scene, tags: $tags, user: $user) {\n    scene {\n      id\n    }\n    tag {\n      id\n    }\n  }\n}"];

export function appGql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;