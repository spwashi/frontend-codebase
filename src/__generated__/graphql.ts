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
  name: Scalars['String'];
  realname: Scalars['String'];
  uri: Scalars['String'];
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
  concept?: InputMaybe<CreateConceptInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateEventArgs = {
  event?: InputMaybe<CreateEventInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateProjectArgs = {
  project?: InputMaybe<CreateProjectInput>;
};


export type MutationCreateSceneArgs = {
  scene?: InputMaybe<CreateSceneInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateTagArgs = {
  tag?: InputMaybe<CreateTagInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteConceptArgs = {
  concept?: InputMaybe<DeleteConceptInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteEventArgs = {
  event?: InputMaybe<DeleteEventInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteProjectArgs = {
  project?: InputMaybe<DeleteProjectInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteSceneArgs = {
  scene?: InputMaybe<DeleteSceneInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteTagArgs = {
  tag?: InputMaybe<DeleteTagInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditConceptArgs = {
  concept?: InputMaybe<EditConceptInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditEventArgs = {
  event?: InputMaybe<EditEventInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditProjectArgs = {
  project?: InputMaybe<EditProjectInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditSceneArgs = {
  scene?: InputMaybe<EditSceneInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditTagArgs = {
  tag?: InputMaybe<EditTagInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditUserArgs = {
  user?: InputMaybe<EditUserInput>;
};


export type MutationLinkConceptsArgs = {
  primary?: InputMaybe<ConceptReferenceInput>;
  secondary?: InputMaybe<ConceptReferenceInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationLogInArgs = {
  password?: InputMaybe<PasswordReferenceInput>;
  project?: InputMaybe<ProjectReferenceInput>;
  user?: InputMaybe<UserLoginInput>;
};


export type MutationSignUpArgs = {
  password: CreatePasswordInput;
  project?: InputMaybe<ProjectReferenceInput>;
  user: CreateUserInput;
};


export type MutationTagConceptArgs = {
  concept?: InputMaybe<ConceptReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagEventArgs = {
  event?: InputMaybe<EventReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagProjectArgs = {
  project?: InputMaybe<ProjectReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagSceneArgs = {
  scene?: InputMaybe<SceneReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagConceptArgs = {
  concept?: InputMaybe<ConceptReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagEventArgs = {
  event?: InputMaybe<EventReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagProjectArgs = {
  project?: InputMaybe<ProjectReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagSceneArgs = {
  scene?: InputMaybe<SceneReferenceInput>;
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
  assetList?: Maybe<Array<Maybe<Asset>>>;
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
  realname: Scalars['String'];
};


export type QueryAssetListArgs = {
  user?: InputMaybe<UserReferenceInput>;
};


export type QueryConceptArgs = {
  id: Scalars['String'];
};


export type QueryEventArgs = {
  id: Scalars['String'];
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProjectListArgs = {
  domain?: InputMaybe<Scalars['String']>;
};


export type QuerySceneArgs = {
  id: Scalars['String'];
};


export type QueryTagArgs = {
  id: Scalars['String'];
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

export type CreateOneConceptMutationVariables = Exact<{
  concept?: InputMaybe<CreateConceptInput>;
  user: UserReferenceInput;
}>;


export type CreateOneConceptMutation = { __typename?: 'Mutation', createConcept?: { __typename: 'Concept', id?: string | null, title: string, src?: string | null, published?: boolean | null, contentType?: string | null } | null };

export type EditConceptMutationVariables = Exact<{
  concept?: InputMaybe<EditConceptInput>;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type EditConceptMutation = { __typename?: 'Mutation', editConcept?: { __typename?: 'Concept', id?: string | null, title: string, src?: string | null, contentType?: string | null, published?: boolean | null } | null };

export type DeleteEventTagMutationVariables = Exact<{
  event: EventReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type DeleteEventTagMutation = { __typename?: 'Mutation', untagEvent?: { __typename?: 'EventTag', tag?: { __typename?: 'Tag', id?: string | null } | null, event?: { __typename?: 'Event', id?: string | null } | null } | null };


export const CreateOneConceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneConcept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"concept"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateConceptInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createConcept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"concept"},"value":{"kind":"Variable","name":{"kind":"Name","value":"concept"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]}}]} as unknown as DocumentNode<CreateOneConceptMutation, CreateOneConceptMutationVariables>;
export const EditConceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditConcept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"concept"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EditConceptInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editConcept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"concept"},"value":{"kind":"Variable","name":{"kind":"Name","value":"concept"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"published"}}]}}]}}]} as unknown as DocumentNode<EditConceptMutation, EditConceptMutationVariables>;
export const DeleteEventTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEventTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventReferenceInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserReferenceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"untagEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"event"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"tags"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteEventTagMutation, DeleteEventTagMutationVariables>;
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
  name: Scalars['String'];
  realname: Scalars['String'];
  uri: Scalars['String'];
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
  concept?: InputMaybe<CreateConceptInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateEventArgs = {
  event?: InputMaybe<CreateEventInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateProjectArgs = {
  project?: InputMaybe<CreateProjectInput>;
};


export type MutationCreateSceneArgs = {
  scene?: InputMaybe<CreateSceneInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationCreateTagArgs = {
  tag?: InputMaybe<CreateTagInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteConceptArgs = {
  concept?: InputMaybe<DeleteConceptInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteEventArgs = {
  event?: InputMaybe<DeleteEventInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteProjectArgs = {
  project?: InputMaybe<DeleteProjectInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteSceneArgs = {
  scene?: InputMaybe<DeleteSceneInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationDeleteTagArgs = {
  tag?: InputMaybe<DeleteTagInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditConceptArgs = {
  concept?: InputMaybe<EditConceptInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditEventArgs = {
  event?: InputMaybe<EditEventInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditProjectArgs = {
  project?: InputMaybe<EditProjectInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditSceneArgs = {
  scene?: InputMaybe<EditSceneInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditTagArgs = {
  tag?: InputMaybe<EditTagInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationEditUserArgs = {
  user?: InputMaybe<EditUserInput>;
};


export type MutationLinkConceptsArgs = {
  primary?: InputMaybe<ConceptReferenceInput>;
  secondary?: InputMaybe<ConceptReferenceInput>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationLogInArgs = {
  password?: InputMaybe<PasswordReferenceInput>;
  project?: InputMaybe<ProjectReferenceInput>;
  user?: InputMaybe<UserLoginInput>;
};


export type MutationSignUpArgs = {
  password: CreatePasswordInput;
  project?: InputMaybe<ProjectReferenceInput>;
  user: CreateUserInput;
};


export type MutationTagConceptArgs = {
  concept?: InputMaybe<ConceptReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagEventArgs = {
  event?: InputMaybe<EventReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagProjectArgs = {
  project?: InputMaybe<ProjectReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationTagSceneArgs = {
  scene?: InputMaybe<SceneReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagConceptArgs = {
  concept?: InputMaybe<ConceptReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagEventArgs = {
  event?: InputMaybe<EventReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagProjectArgs = {
  project?: InputMaybe<ProjectReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>>>;
  user?: InputMaybe<UserReferenceInput>;
};


export type MutationUntagSceneArgs = {
  scene?: InputMaybe<SceneReferenceInput>;
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
  assetList?: Maybe<Array<Maybe<Asset>>>;
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
  realname: Scalars['String'];
};


export type QueryAssetListArgs = {
  user?: InputMaybe<UserReferenceInput>;
};


export type QueryConceptArgs = {
  id: Scalars['String'];
};


export type QueryEventArgs = {
  id: Scalars['String'];
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProjectListArgs = {
  domain?: InputMaybe<Scalars['String']>;
};


export type QuerySceneArgs = {
  id: Scalars['String'];
};


export type QueryTagArgs = {
  id: Scalars['String'];
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

export type CreateOneConceptMutationVariables = Exact<{
  concept?: InputMaybe<CreateConceptInput>;
  user: UserReferenceInput;
}>;


export type CreateOneConceptMutation = { __typename?: 'Mutation', createConcept?: { __typename: 'Concept', id?: string | null, title: string, src?: string | null, published?: boolean | null, contentType?: string | null } | null };

export type EditConceptMutationVariables = Exact<{
  concept?: InputMaybe<EditConceptInput>;
  user?: InputMaybe<UserReferenceInput>;
}>;


export type EditConceptMutation = { __typename?: 'Mutation', editConcept?: { __typename?: 'Concept', id?: string | null, title: string, src?: string | null, contentType?: string | null, published?: boolean | null } | null };

export type DeleteEventTagMutationVariables = Exact<{
  event: EventReferenceInput;
  user?: InputMaybe<UserReferenceInput>;
  tags?: InputMaybe<Array<InputMaybe<TagReferenceInput>> | InputMaybe<TagReferenceInput>>;
}>;


export type DeleteEventTagMutation = { __typename?: 'Mutation', untagEvent?: { __typename?: 'EventTag', tag?: { __typename?: 'Tag', id?: string | null } | null, event?: { __typename?: 'Event', id?: string | null } | null } | null };
