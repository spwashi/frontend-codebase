/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Asset = {
  __typename?: 'Asset';
  contentType: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  realname: Scalars['String'];
  uri: Scalars['String'];
};

export type AssetReferenceInput = {
  realname: Scalars['String'];
};

export type Concept = {
  __typename?: 'Concept';
  conceptTags?: Maybe<Array<Maybe<ConceptTag>>>;
  contentType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ConceptConcept = {
  __typename?: 'ConceptConcept';
  id?: Maybe<Scalars['String']>;
  primary?: Maybe<Concept>;
  relationship?: Maybe<Scalars['String']>;
  secondary?: Maybe<Concept>;
};

export type ConceptReferenceInput = {
  id: Scalars['String'];
};

export type ConceptTag = {
  __typename?: 'ConceptTag';
  concept?: Maybe<Concept>;
  id?: Maybe<Scalars['String']>;
  tag?: Maybe<Tag>;
};

export type CreateConceptInput = {
  contentType?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateEventInput = {
  description: Scalars['String'];
  end: Scalars['String'];
  start: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePasswordInput = {
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  domain: Scalars['String'];
  name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type CreateSceneInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  title: Scalars['String'];
};

export type CreateTagInput = {
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  name?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type DeleteConceptInput = {
  id: Scalars['String'];
};

export type DeleteEventInput = {
  id: Scalars['String'];
};

export type DeleteProjectInput = {
  id: Scalars['String'];
};

export type DeleteSceneInput = {
  id: Scalars['String'];
};

export type DeleteTagInput = {
  id: Scalars['String'];
};

export type DeleteUserInput = {
  id: Scalars['String'];
};

export type EditConceptInput = {
  contentType?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditEventInput = {
  description?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  start?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type EditSceneInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditTagInput = {
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditUserInput = {
  name?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  description?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  eventTags?: Maybe<Array<Maybe<EventTag>>>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type EventReferenceInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EventTag = {
  __typename?: 'EventTag';
  event?: Maybe<Event>;
  tag?: Maybe<Tag>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createConcept?: Maybe<Concept>;
  createEvent?: Maybe<Event>;
  createProject?: Maybe<Project>;
  createScene?: Maybe<Scene>;
  createTag?: Maybe<Tag>;
  deleteConcept?: Maybe<Concept>;
  deleteEvent?: Maybe<Event>;
  deleteProject?: Maybe<Project>;
  deleteScene?: Maybe<Scene>;
  deleteTag?: Maybe<Tag>;
  editConcept?: Maybe<Concept>;
  editEvent?: Maybe<Event>;
  editProject?: Maybe<Project>;
  editScene?: Maybe<Scene>;
  editTag?: Maybe<Tag>;
  editUser?: Maybe<User>;
  linkConcepts?: Maybe<ConceptConcept>;
  logIn?: Maybe<UserLoginResponse>;
  signUp?: Maybe<UserSignupResponse>;
  tagConcept?: Maybe<ConceptTag>;
  tagEvent?: Maybe<EventTag>;
  tagProject?: Maybe<ProjectTag>;
  tagScene?: Maybe<SceneTag>;
  untagConcept?: Maybe<ConceptTag>;
  untagEvent?: Maybe<EventTag>;
  untagProject?: Maybe<ProjectTag>;
  untagScene?: Maybe<SceneTag>;
};


export type MutationCreateConceptArgs = {
  concept: CreateConceptInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateEventArgs = {
  event: CreateEventInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateProjectArgs = {
  project: CreateProjectInput;
};


export type MutationCreateSceneArgs = {
  scene: CreateSceneInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateTagArgs = {
  tag: CreateTagInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteConceptArgs = {
  concept: DeleteConceptInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteEventArgs = {
  event: DeleteEventInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteProjectArgs = {
  project: DeleteProjectInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteSceneArgs = {
  scene: DeleteSceneInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteTagArgs = {
  tag: DeleteTagInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditConceptArgs = {
  concept: EditConceptInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditEventArgs = {
  event: EditEventInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditProjectArgs = {
  project: EditProjectInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditSceneArgs = {
  scene: EditSceneInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditTagArgs = {
  tag: EditTagInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditUserArgs = {
  user: EditUserInput;
};


export type MutationLinkConceptsArgs = {
  primary: ConceptReferenceInput;
  secondary: ConceptReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationLogInArgs = {
  password?: InputMaybe<PasswordReferenceInput>;
  project?: InputMaybe<ProjectReferenceInput>;
  user: UserLoginInput;
};


export type MutationSignUpArgs = {
  password: CreatePasswordInput;
  project?: InputMaybe<ProjectReferenceInput>;
  user: CreateUserInput;
};


export type MutationTagConceptArgs = {
  concept: ConceptReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagEventArgs = {
  event: EventReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagProjectArgs = {
  project: ProjectReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagSceneArgs = {
  scene: SceneReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagConceptArgs = {
  concept: ConceptReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagEventArgs = {
  event: EventReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagProjectArgs = {
  project: ProjectReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagSceneArgs = {
  scene: SceneReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};

export type PasswordReferenceInput = {
  password: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectReferenceInput = {
  id: Scalars['String'];
};

export type ProjectTag = {
  __typename?: 'ProjectTag';
  project?: Maybe<Project>;
  tag?: Maybe<Tag>;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetList: Array<Maybe<Asset>>;
  concept?: Maybe<Concept>;
  conceptList: Array<Maybe<Concept>>;
  event?: Maybe<Event>;
  eventList: Array<Maybe<Event>>;
  project?: Maybe<Project>;
  projectList: Array<Maybe<Project>>;
  scene?: Maybe<Scene>;
  sceneList: Array<Maybe<Scene>>;
  tag?: Maybe<Tag>;
  tagList: Array<Maybe<Tag>>;
  userList: Array<Maybe<User>>;
};


export type QueryAssetArgs = {
  asset: AssetReferenceInput;
};


export type QueryAssetListArgs = {
  user?: InputMaybe<UserReferenceInput>;
};


export type QueryConceptArgs = {
  concept: ConceptReferenceInput;
};


export type QueryEventArgs = {
  event: EventReferenceInput;
};


export type QueryProjectArgs = {
  project: ProjectReferenceInput;
};


export type QueryProjectListArgs = {
  domain?: InputMaybe<Scalars['String']>;
};


export type QuerySceneArgs = {
  scene: SceneReferenceInput;
};


export type QueryTagArgs = {
  tag: TagReferenceInput;
};

export type Scene = {
  __typename?: 'Scene';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type SceneReferenceInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type SceneTag = {
  __typename?: 'SceneTag';
  scene?: Maybe<Scene>;
  tag?: Maybe<Tag>;
};

export type Tag = {
  __typename?: 'Tag';
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type TagReferenceInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  concepts?: Maybe<Array<Maybe<Concept>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserLoginInput = {
  username: Scalars['String'];
};

export type UserLoginResponse = {
  __typename?: 'UserLoginResponse';
  jwt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  username?: Maybe<Scalars['String']>;
};

export type UserLogoutInput = {
  jwt: Scalars['String'];
};

export type UserLogoutResponse = {
  __typename?: 'UserLogoutResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type UserReferenceInput = {
  id?: InputMaybe<Scalars['String']>;
  jwt?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserSignupResponse = {
  __typename?: 'UserSignupResponse';
  user?: Maybe<User>;
};

export type CreateConceptMutationVariables = Exact<{
  concept: CreateConceptInput;
  user: UserReferenceInput;
}>;


export type CreateConceptMutation = { __typename?: 'Mutation', createConcept?: { __typename: 'Concept', id?: string | null, title: string, src?: string | null, published?: boolean | null, contentType?: string | null } | null };

export type CreateEventMutationVariables = Exact<{
  event: CreateEventInput;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'Event', id?: string | null, title: string, description?: string | null, published?: boolean | null } | null };

export type CreateProjectMutationVariables = Exact<{
  project: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'Project', id?: string | null, title: string, domain?: string | null, description?: string | null } | null };

export type CreateSceneMutationVariables = Exact<{
  scene: CreateSceneInput;
}>;


export type CreateSceneMutation = { __typename?: 'Mutation', createScene?: { __typename?: 'Scene', id?: string | null, name: string, title?: string | null, description?: string | null } | null };

export type CreateTagMutationVariables = Exact<{
  tag: CreateTagInput;
  user: UserReferenceInput;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag?: { __typename?: 'Tag', id?: string | null, title: string, domain?: string | null, description?: string | null } | null };

export type DeleteConceptMutationVariables = Exact<{
  concept: DeleteConceptInput;
}>;


export type DeleteConceptMutation = { __typename?: 'Mutation', deleteConcept?: { __typename?: 'Concept', id?: string | null } | null };

export type DeleteEventMutationVariables = Exact<{
  event: DeleteEventInput;
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: { __typename?: 'Event', id?: string | null } | null };

export type DeleteSceneMutationVariables = Exact<{
  scene: DeleteSceneInput;
}>;


export type DeleteSceneMutation = { __typename?: 'Mutation', deleteScene?: { __typename?: 'Scene', id?: string | null } | null };

export type DeleteTagMutationVariables = Exact<{
  user: UserReferenceInput;
  tag: DeleteTagInput;
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', deleteTag?: { __typename?: 'Tag', title: string, domain?: string | null } | null };

export type EditConceptMutationVariables = Exact<{
  concept: EditConceptInput;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type EditConceptMutation = { __typename?: 'Mutation', editConcept?: { __typename?: 'Concept', id?: string | null, title: string, src?: string | null, contentType?: string | null, published?: boolean | null } | null };

export type EditEventMutationVariables = Exact<{
  event: EditEventInput;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type EditEventMutation = { __typename?: 'Mutation', editEvent?: { __typename?: 'Event', id?: string | null, title: string, description?: string | null, start?: string | null, startDate?: string | null, end?: string | null, endDate?: string | null } | null };

export type EditSceneMutationVariables = Exact<{
  scene: EditSceneInput;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type EditSceneMutation = { __typename?: 'Mutation', editScene?: { __typename?: 'Scene', id?: string | null, name: string, title?: string | null, description?: string | null } | null };

export type FetchAssetListQueryVariables = Exact<{
  user?: InputMaybe<UserReferenceInput>;
}>;


export type FetchAssetListQuery = { __typename?: 'Query', assetList: Array<{ __typename?: 'Asset', id: string, name: string, realname: string } | null> };

export type FetchConceptListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchConceptListQuery = { __typename?: 'Query', conceptList: Array<{ __typename?: 'Concept', id?: string | null, title: string, contentType?: string | null, src?: string | null, published?: boolean | null } | null> };

export type FetchEventListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchEventListQuery = { __typename?: 'Query', eventList: Array<{ __typename?: 'Event', id?: string | null, title: string, start?: string | null, startDate?: string | null, end?: string | null, endDate?: string | null, description?: string | null, published?: boolean | null } | null> };

export type FetchProjectListQueryVariables = Exact<{
  domain?: InputMaybe<Scalars['String']>;
}>;


export type FetchProjectListQuery = { __typename?: 'Query', projectList: Array<{ __typename?: 'Project', id?: string | null, title: string, name: string, description?: string | null, domain?: string | null } | null> };

export type FetchSceneListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchSceneListQuery = { __typename?: 'Query', sceneList: Array<{ __typename?: 'Scene', id?: string | null, name: string, title?: string | null, description?: string | null } | null> };

export type FetchTagListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTagListQuery = { __typename?: 'Query', tagList: Array<{ __typename?: 'Tag', id?: string | null, title: string, domain?: string | null } | null> };

export type FetchAssetQueryVariables = Exact<{
  asset: AssetReferenceInput;
}>;


export type FetchAssetQuery = { __typename?: 'Query', asset?: { __typename?: 'Asset', name: string, realname: string, contentType: string, uri: string } | null };

export type FetchConceptQueryVariables = Exact<{
  concept: ConceptReferenceInput;
}>;


export type FetchConceptQuery = { __typename?: 'Query', concept?: { __typename?: 'Concept', id?: string | null, title: string, src?: string | null, contentType?: string | null, conceptTags?: Array<{ __typename?: 'ConceptTag', tag?: { __typename?: 'Tag', title: string, domain?: string | null } | null } | null> | null } | null };

export type FetchEventQueryVariables = Exact<{
  event: EventReferenceInput;
}>;


export type FetchEventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id?: string | null, title: string, start?: string | null, startDate?: string | null, end?: string | null, endDate?: string | null, description?: string | null, eventTags?: Array<{ __typename?: 'EventTag', event?: { __typename?: 'Event', id?: string | null } | null, tag?: { __typename?: 'Tag', id?: string | null, title: string, domain?: string | null } | null } | null> | null } | null };

export type FetchProjectQueryVariables = Exact<{
  project: ProjectReferenceInput;
}>;


export type FetchProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id?: string | null, title: string, domain?: string | null, description?: string | null } | null };

export type FetchSceneQueryVariables = Exact<{
  scene: SceneReferenceInput;
}>;


export type FetchSceneQuery = { __typename?: 'Query', scene?: { __typename?: 'Scene', id?: string | null, name: string, title?: string | null, description?: string | null } | null };

export type FetchTagQueryVariables = Exact<{
  tag: TagReferenceInput;
}>;


export type FetchTagQuery = { __typename?: 'Query', tag?: { __typename?: 'Tag', id?: string | null, domain?: string | null, title: string, description?: string | null } | null };

export type LogInMutationVariables = Exact<{
  user: UserLoginInput;
  project?: InputMaybe<ProjectReferenceInput>;
  password?: InputMaybe<PasswordReferenceInput>;
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn?: { __typename?: 'UserLoginResponse', jwt?: string | null, username?: string | null, user?: { __typename?: 'User', id?: string | null, name?: string | null, username: string } | null } | null };

export type SignUpMutationVariables = Exact<{
  user: CreateUserInput;
  password: CreatePasswordInput;
  project?: InputMaybe<ProjectReferenceInput>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'UserSignupResponse', user?: { __typename?: 'User', id?: string | null, name?: string | null, username: string } | null } | null };

export type TagConceptMutationVariables = Exact<{
  concept: ConceptReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type TagConceptMutation = { __typename?: 'Mutation', tagConcept?: { __typename?: 'ConceptTag', id?: string | null } | null };

export type TagEventMutationVariables = Exact<{
  event: EventReferenceInput;
  user: UserReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type TagEventMutation = { __typename?: 'Mutation', tagEvent?: { __typename: 'EventTag' } | null };

export type UntagConceptMutationVariables = Exact<{
  concept: ConceptReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type UntagConceptMutation = { __typename?: 'Mutation', untagConcept?: { __typename?: 'ConceptTag', id?: string | null, concept?: { __typename?: 'Concept', id?: string | null } | null, tag?: { __typename?: 'Tag', id?: string | null } | null } | null };

export type UntagEventMutationVariables = Exact<{
  event: EventReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type UntagEventMutation = { __typename?: 'Mutation', untagEvent?: { __typename?: 'EventTag', tag?: { __typename?: 'Tag', id?: string | null } | null, event?: { __typename?: 'Event', id?: string | null } | null } | null };

export type UntagSceneMutationVariables = Exact<{
  scene: SceneReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type UntagSceneMutation = { __typename?: 'Mutation', untagScene?: { __typename?: 'SceneTag', scene?: { __typename?: 'Scene', id?: string | null } | null, tag?: { __typename?: 'Tag', id?: string | null } | null } | null };


export const CreateConceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateConcept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"concept"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateConceptInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createConcept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"concept"},"value":{"kind":"Variable","name":{"kind":"Name","value":"concept"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]}}]} as unknown as DocumentNode<CreateConceptMutation, CreateConceptMutationVariables>;
export const CreateEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEventInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"event"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"published"}}]}}]}}]} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"project"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"project"},"value":{"kind":"Variable","name":{"kind":"Name","value":"project"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const CreateSceneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateScene"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scene"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSceneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createScene"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scene"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scene"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateSceneMutation, CreateSceneMutationVariables>;
export const CreateTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTagInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteConceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteConcept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"concept"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteConceptInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteConcept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"concept"},"value":{"kind":"Variable","name":{"kind":"Name","value":"concept"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteConceptMutation, DeleteConceptMutationVariables>;
export const DeleteEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"event"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteEventMutation, DeleteEventMutationVariables>;
export const DeleteSceneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteScene"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scene"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSceneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteScene"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scene"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scene"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSceneMutation, DeleteSceneMutationVariables>;
export const DeleteTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTagInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}}]} as unknown as DocumentNode<DeleteTagMutation, DeleteTagMutationVariables>;
export const EditConceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditConcept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"concept"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditConceptInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editConcept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"concept"},"value":{"kind":"Variable","name":{"kind":"Name","value":"concept"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"published"}}]}}]}}]} as unknown as DocumentNode<EditConceptMutation, EditConceptMutationVariables>;
export const EditEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditEventInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"event"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<EditEventMutation, EditEventMutationVariables>;
export const EditSceneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditScene"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scene"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditSceneInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editScene"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scene"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scene"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<EditSceneMutation, EditSceneMutationVariables>;
export const FetchAssetListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchAssetList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"realname"}}]}}]}}]} as unknown as DocumentNode<FetchAssetListQuery, FetchAssetListQueryVariables>;
export const FetchConceptListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchConceptList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"published"}}]}}]}}]} as unknown as DocumentNode<FetchConceptListQuery, FetchConceptListQueryVariables>;
export const FetchEventListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchEventList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"published"}}]}}]}}]} as unknown as DocumentNode<FetchEventListQuery, FetchEventListQueryVariables>;
export const FetchProjectListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchProjectList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"domain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}}]} as unknown as DocumentNode<FetchProjectListQuery, FetchProjectListQueryVariables>;
export const FetchSceneListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSceneList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sceneList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<FetchSceneListQuery, FetchSceneListQueryVariables>;
export const FetchTagListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTagList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}}]} as unknown as DocumentNode<FetchTagListQuery, FetchTagListQueryVariables>;
export const FetchAssetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchAsset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssetReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"asset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"realname"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]} as unknown as DocumentNode<FetchAssetQuery, FetchAssetQueryVariables>;
export const FetchConceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchConcept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"concept"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConceptReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"concept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"concept"},"value":{"kind":"Variable","name":{"kind":"Name","value":"concept"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"conceptTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchConceptQuery, FetchConceptQueryVariables>;
export const FetchEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"event"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"eventTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchEventQuery, FetchEventQueryVariables>;
export const FetchProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"project"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"project"},"value":{"kind":"Variable","name":{"kind":"Name","value":"project"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<FetchProjectQuery, FetchProjectQueryVariables>;
export const FetchSceneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchScene"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scene"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SceneReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scene"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scene"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scene"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<FetchSceneQuery, FetchSceneQueryVariables>;
export const FetchTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<FetchTagQuery, FetchTagQueryVariables>;
export const LogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLoginInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"project"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectReferenceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PasswordReferenceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"project"},"value":{"kind":"Variable","name":{"kind":"Name","value":"project"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<LogInMutation, LogInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePasswordInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"project"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectReferenceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"project"},"value":{"kind":"Variable","name":{"kind":"Name","value":"project"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const TagConceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TagConcept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"concept"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConceptReferenceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagConcept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"concept"},"value":{"kind":"Variable","name":{"kind":"Name","value":"concept"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"tags"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TagConceptMutation, TagConceptMutationVariables>;
export const TagEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TagEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventReferenceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"event"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"tags"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<TagEventMutation, TagEventMutationVariables>;
export const UntagConceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UntagConcept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"concept"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConceptReferenceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"untagConcept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"concept"},"value":{"kind":"Variable","name":{"kind":"Name","value":"concept"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"tags"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"concept"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UntagConceptMutation, UntagConceptMutationVariables>;
export const UntagEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UntagEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventReferenceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"untagEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"event"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"tags"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UntagEventMutation, UntagEventMutationVariables>;
export const UntagSceneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UntagScene"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scene"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SceneReferenceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagReferenceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"untagScene"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scene"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scene"}}},{"kind":"Argument","name":{"kind":"Name","value":"tags"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scene"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UntagSceneMutation, UntagSceneMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Asset = {
  __typename?: 'Asset';
  contentType: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  realname: Scalars['String'];
  uri: Scalars['String'];
};

export type AssetReferenceInput = {
  realname: Scalars['String'];
};

export type Concept = {
  __typename?: 'Concept';
  conceptTags?: Maybe<Array<Maybe<ConceptTag>>>;
  contentType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ConceptConcept = {
  __typename?: 'ConceptConcept';
  id?: Maybe<Scalars['String']>;
  primary?: Maybe<Concept>;
  relationship?: Maybe<Scalars['String']>;
  secondary?: Maybe<Concept>;
};

export type ConceptReferenceInput = {
  id: Scalars['String'];
};

export type ConceptTag = {
  __typename?: 'ConceptTag';
  concept?: Maybe<Concept>;
  id?: Maybe<Scalars['String']>;
  tag?: Maybe<Tag>;
};

export type CreateConceptInput = {
  contentType?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateEventInput = {
  description: Scalars['String'];
  end: Scalars['String'];
  start: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePasswordInput = {
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  domain: Scalars['String'];
  name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type CreateSceneInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  title: Scalars['String'];
};

export type CreateTagInput = {
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  name?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type DeleteConceptInput = {
  id: Scalars['String'];
};

export type DeleteEventInput = {
  id: Scalars['String'];
};

export type DeleteProjectInput = {
  id: Scalars['String'];
};

export type DeleteSceneInput = {
  id: Scalars['String'];
};

export type DeleteTagInput = {
  id: Scalars['String'];
};

export type DeleteUserInput = {
  id: Scalars['String'];
};

export type EditConceptInput = {
  contentType?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditEventInput = {
  description?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  start?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type EditSceneInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditTagInput = {
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditUserInput = {
  name?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  description?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  eventTags?: Maybe<Array<Maybe<EventTag>>>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type EventReferenceInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EventTag = {
  __typename?: 'EventTag';
  event?: Maybe<Event>;
  tag?: Maybe<Tag>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createConcept?: Maybe<Concept>;
  createEvent?: Maybe<Event>;
  createProject?: Maybe<Project>;
  createScene?: Maybe<Scene>;
  createTag?: Maybe<Tag>;
  deleteConcept?: Maybe<Concept>;
  deleteEvent?: Maybe<Event>;
  deleteProject?: Maybe<Project>;
  deleteScene?: Maybe<Scene>;
  deleteTag?: Maybe<Tag>;
  editConcept?: Maybe<Concept>;
  editEvent?: Maybe<Event>;
  editProject?: Maybe<Project>;
  editScene?: Maybe<Scene>;
  editTag?: Maybe<Tag>;
  editUser?: Maybe<User>;
  linkConcepts?: Maybe<ConceptConcept>;
  logIn?: Maybe<UserLoginResponse>;
  signUp?: Maybe<UserSignupResponse>;
  tagConcept?: Maybe<ConceptTag>;
  tagEvent?: Maybe<EventTag>;
  tagProject?: Maybe<ProjectTag>;
  tagScene?: Maybe<SceneTag>;
  untagConcept?: Maybe<ConceptTag>;
  untagEvent?: Maybe<EventTag>;
  untagProject?: Maybe<ProjectTag>;
  untagScene?: Maybe<SceneTag>;
};


export type MutationCreateConceptArgs = {
  concept: CreateConceptInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateEventArgs = {
  event: CreateEventInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateProjectArgs = {
  project: CreateProjectInput;
};


export type MutationCreateSceneArgs = {
  scene: CreateSceneInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateTagArgs = {
  tag: CreateTagInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteConceptArgs = {
  concept: DeleteConceptInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteEventArgs = {
  event: DeleteEventInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteProjectArgs = {
  project: DeleteProjectInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteSceneArgs = {
  scene: DeleteSceneInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteTagArgs = {
  tag: DeleteTagInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditConceptArgs = {
  concept: EditConceptInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditEventArgs = {
  event: EditEventInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditProjectArgs = {
  project: EditProjectInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditSceneArgs = {
  scene: EditSceneInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditTagArgs = {
  tag: EditTagInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditUserArgs = {
  user: EditUserInput;
};


export type MutationLinkConceptsArgs = {
  primary: ConceptReferenceInput;
  secondary: ConceptReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationLogInArgs = {
  password?: InputMaybe<PasswordReferenceInput>;
  project?: InputMaybe<ProjectReferenceInput>;
  user: UserLoginInput;
};


export type MutationSignUpArgs = {
  password: CreatePasswordInput;
  project?: InputMaybe<ProjectReferenceInput>;
  user: CreateUserInput;
};


export type MutationTagConceptArgs = {
  concept: ConceptReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagEventArgs = {
  event: EventReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagProjectArgs = {
  project: ProjectReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagSceneArgs = {
  scene: SceneReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagConceptArgs = {
  concept: ConceptReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagEventArgs = {
  event: EventReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagProjectArgs = {
  project: ProjectReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagSceneArgs = {
  scene: SceneReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};

export type PasswordReferenceInput = {
  password: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectReferenceInput = {
  id: Scalars['String'];
};

export type ProjectTag = {
  __typename?: 'ProjectTag';
  project?: Maybe<Project>;
  tag?: Maybe<Tag>;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetList: Array<Maybe<Asset>>;
  concept?: Maybe<Concept>;
  conceptList: Array<Maybe<Concept>>;
  event?: Maybe<Event>;
  eventList: Array<Maybe<Event>>;
  project?: Maybe<Project>;
  projectList: Array<Maybe<Project>>;
  scene?: Maybe<Scene>;
  sceneList: Array<Maybe<Scene>>;
  tag?: Maybe<Tag>;
  tagList: Array<Maybe<Tag>>;
  userList: Array<Maybe<User>>;
};


export type QueryAssetArgs = {
  asset: AssetReferenceInput;
};


export type QueryAssetListArgs = {
  user?: InputMaybe<UserReferenceInput>;
};


export type QueryConceptArgs = {
  concept: ConceptReferenceInput;
};


export type QueryEventArgs = {
  event: EventReferenceInput;
};


export type QueryProjectArgs = {
  project: ProjectReferenceInput;
};


export type QueryProjectListArgs = {
  domain?: InputMaybe<Scalars['String']>;
};


export type QuerySceneArgs = {
  scene: SceneReferenceInput;
};


export type QueryTagArgs = {
  tag: TagReferenceInput;
};

export type Scene = {
  __typename?: 'Scene';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type SceneReferenceInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type SceneTag = {
  __typename?: 'SceneTag';
  scene?: Maybe<Scene>;
  tag?: Maybe<Tag>;
};

export type Tag = {
  __typename?: 'Tag';
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type TagReferenceInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  concepts?: Maybe<Array<Maybe<Concept>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserLoginInput = {
  username: Scalars['String'];
};

export type UserLoginResponse = {
  __typename?: 'UserLoginResponse';
  jwt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  username?: Maybe<Scalars['String']>;
};

export type UserLogoutInput = {
  jwt: Scalars['String'];
};

export type UserLogoutResponse = {
  __typename?: 'UserLogoutResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type UserReferenceInput = {
  id?: InputMaybe<Scalars['String']>;
  jwt?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserSignupResponse = {
  __typename?: 'UserSignupResponse';
  user?: Maybe<User>;
};

export type CreateConceptMutationVariables = Exact<{
  concept: CreateConceptInput;
  user: UserReferenceInput;
}>;


export type CreateConceptMutation = { __typename?: 'Mutation', createConcept?: { __typename: 'Concept', id?: string | null, title: string, src?: string | null, published?: boolean | null, contentType?: string | null } | null };

export type CreateEventMutationVariables = Exact<{
  event: CreateEventInput;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'Event', id?: string | null, title: string, description?: string | null, published?: boolean | null } | null };

export type CreateProjectMutationVariables = Exact<{
  project: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'Project', id?: string | null, title: string, domain?: string | null, description?: string | null } | null };

export type CreateSceneMutationVariables = Exact<{
  scene: CreateSceneInput;
}>;


export type CreateSceneMutation = { __typename?: 'Mutation', createScene?: { __typename?: 'Scene', id?: string | null, name: string, title?: string | null, description?: string | null } | null };

export type CreateTagMutationVariables = Exact<{
  tag: CreateTagInput;
  user: UserReferenceInput;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag?: { __typename?: 'Tag', id?: string | null, title: string, domain?: string | null, description?: string | null } | null };

export type DeleteConceptMutationVariables = Exact<{
  concept: DeleteConceptInput;
}>;


export type DeleteConceptMutation = { __typename?: 'Mutation', deleteConcept?: { __typename?: 'Concept', id?: string | null } | null };

export type DeleteEventMutationVariables = Exact<{
  event: DeleteEventInput;
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: { __typename?: 'Event', id?: string | null } | null };

export type DeleteSceneMutationVariables = Exact<{
  scene: DeleteSceneInput;
}>;


export type DeleteSceneMutation = { __typename?: 'Mutation', deleteScene?: { __typename?: 'Scene', id?: string | null } | null };

export type DeleteTagMutationVariables = Exact<{
  user: UserReferenceInput;
  tag: DeleteTagInput;
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', deleteTag?: { __typename?: 'Tag', title: string, domain?: string | null } | null };

export type EditConceptMutationVariables = Exact<{
  concept: EditConceptInput;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type EditConceptMutation = { __typename?: 'Mutation', editConcept?: { __typename?: 'Concept', id?: string | null, title: string, src?: string | null, contentType?: string | null, published?: boolean | null } | null };

export type EditEventMutationVariables = Exact<{
  event: EditEventInput;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type EditEventMutation = { __typename?: 'Mutation', editEvent?: { __typename?: 'Event', id?: string | null, title: string, description?: string | null, start?: string | null, startDate?: string | null, end?: string | null, endDate?: string | null } | null };

export type EditSceneMutationVariables = Exact<{
  scene: EditSceneInput;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type EditSceneMutation = { __typename?: 'Mutation', editScene?: { __typename?: 'Scene', id?: string | null, name: string, title?: string | null, description?: string | null } | null };

export type FetchAssetListQueryVariables = Exact<{
  user?: InputMaybe<UserReferenceInput>;
}>;


export type FetchAssetListQuery = { __typename?: 'Query', assetList: Array<{ __typename?: 'Asset', id: string, name: string, realname: string } | null> };

export type FetchConceptListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchConceptListQuery = { __typename?: 'Query', conceptList: Array<{ __typename?: 'Concept', id?: string | null, title: string, contentType?: string | null, src?: string | null, published?: boolean | null } | null> };

export type FetchEventListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchEventListQuery = { __typename?: 'Query', eventList: Array<{ __typename?: 'Event', id?: string | null, title: string, start?: string | null, startDate?: string | null, end?: string | null, endDate?: string | null, description?: string | null, published?: boolean | null } | null> };

export type FetchProjectListQueryVariables = Exact<{
  domain?: InputMaybe<Scalars['String']>;
}>;


export type FetchProjectListQuery = { __typename?: 'Query', projectList: Array<{ __typename?: 'Project', id?: string | null, title: string, name: string, description?: string | null, domain?: string | null } | null> };

export type FetchSceneListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchSceneListQuery = { __typename?: 'Query', sceneList: Array<{ __typename?: 'Scene', id?: string | null, name: string, title?: string | null, description?: string | null } | null> };

export type FetchTagListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTagListQuery = { __typename?: 'Query', tagList: Array<{ __typename?: 'Tag', id?: string | null, title: string, domain?: string | null } | null> };

export type FetchAssetQueryVariables = Exact<{
  asset: AssetReferenceInput;
}>;


export type FetchAssetQuery = { __typename?: 'Query', asset?: { __typename?: 'Asset', name: string, realname: string, contentType: string, uri: string } | null };

export type FetchConceptQueryVariables = Exact<{
  concept: ConceptReferenceInput;
}>;


export type FetchConceptQuery = { __typename?: 'Query', concept?: { __typename?: 'Concept', id?: string | null, title: string, src?: string | null, contentType?: string | null, conceptTags?: Array<{ __typename?: 'ConceptTag', tag?: { __typename?: 'Tag', title: string, domain?: string | null } | null } | null> | null } | null };

export type FetchEventQueryVariables = Exact<{
  event: EventReferenceInput;
}>;


export type FetchEventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id?: string | null, title: string, start?: string | null, startDate?: string | null, end?: string | null, endDate?: string | null, description?: string | null, eventTags?: Array<{ __typename?: 'EventTag', event?: { __typename?: 'Event', id?: string | null } | null, tag?: { __typename?: 'Tag', id?: string | null, title: string, domain?: string | null } | null } | null> | null } | null };

export type FetchProjectQueryVariables = Exact<{
  project: ProjectReferenceInput;
}>;


export type FetchProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id?: string | null, title: string, domain?: string | null, description?: string | null } | null };

export type FetchSceneQueryVariables = Exact<{
  scene: SceneReferenceInput;
}>;


export type FetchSceneQuery = { __typename?: 'Query', scene?: { __typename?: 'Scene', id?: string | null, name: string, title?: string | null, description?: string | null } | null };

export type FetchTagQueryVariables = Exact<{
  tag: TagReferenceInput;
}>;


export type FetchTagQuery = { __typename?: 'Query', tag?: { __typename?: 'Tag', id?: string | null, domain?: string | null, title: string, description?: string | null } | null };

export type LogInMutationVariables = Exact<{
  user: UserLoginInput;
  project?: InputMaybe<ProjectReferenceInput>;
  password?: InputMaybe<PasswordReferenceInput>;
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn?: { __typename?: 'UserLoginResponse', jwt?: string | null, username?: string | null, user?: { __typename?: 'User', id?: string | null, name?: string | null, username: string } | null } | null };

export type SignUpMutationVariables = Exact<{
  user: CreateUserInput;
  password: CreatePasswordInput;
  project?: InputMaybe<ProjectReferenceInput>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'UserSignupResponse', user?: { __typename?: 'User', id?: string | null, name?: string | null, username: string } | null } | null };

export type TagConceptMutationVariables = Exact<{
  concept: ConceptReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type TagConceptMutation = { __typename?: 'Mutation', tagConcept?: { __typename?: 'ConceptTag', id?: string | null } | null };

export type TagEventMutationVariables = Exact<{
  event: EventReferenceInput;
  user: UserReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type TagEventMutation = { __typename?: 'Mutation', tagEvent?: { __typename: 'EventTag' } | null };

export type UntagConceptMutationVariables = Exact<{
  concept: ConceptReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type UntagConceptMutation = { __typename?: 'Mutation', untagConcept?: { __typename?: 'ConceptTag', id?: string | null, concept?: { __typename?: 'Concept', id?: string | null } | null, tag?: { __typename?: 'Tag', id?: string | null } | null } | null };

export type UntagEventMutationVariables = Exact<{
  event: EventReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type UntagEventMutation = { __typename?: 'Mutation', untagEvent?: { __typename?: 'EventTag', tag?: { __typename?: 'Tag', id?: string | null } | null, event?: { __typename?: 'Event', id?: string | null } | null } | null };

export type UntagSceneMutationVariables = Exact<{
  scene: SceneReferenceInput;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type UntagSceneMutation = { __typename?: 'Mutation', untagScene?: { __typename?: 'SceneTag', scene?: { __typename?: 'Scene', id?: string | null } | null, tag?: { __typename?: 'Tag', id?: string | null } | null } | null };
