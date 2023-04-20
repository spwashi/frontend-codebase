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
    "mutation CreateOneConcept($concept: CreateConceptInput, $user: UserReferenceInput!) {\n  createConcept(user: $user, concept: $concept) {\n    __typename\n    id\n    title\n    src\n    published\n    contentType\n  }\n}": types.CreateOneConceptDocument,
    "mutation EditConcept($concept: EditConceptInput, $user: UserReferenceInput) {\n  editConcept(concept: $concept, user: $user) {\n    id\n    title\n    src\n    contentType\n    published\n  }\n}": types.EditConceptDocument,
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
export function appGql(source: "mutation CreateOneConcept($concept: CreateConceptInput, $user: UserReferenceInput!) {\n  createConcept(user: $user, concept: $concept) {\n    __typename\n    id\n    title\n    src\n    published\n    contentType\n  }\n}"): (typeof documents)["mutation CreateOneConcept($concept: CreateConceptInput, $user: UserReferenceInput!) {\n  createConcept(user: $user, concept: $concept) {\n    __typename\n    id\n    title\n    src\n    published\n    contentType\n  }\n}"];
/**
 * The appGql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function appGql(source: "mutation EditConcept($concept: EditConceptInput, $user: UserReferenceInput) {\n  editConcept(concept: $concept, user: $user) {\n    id\n    title\n    src\n    contentType\n    published\n  }\n}"): (typeof documents)["mutation EditConcept($concept: EditConceptInput, $user: UserReferenceInput) {\n  editConcept(concept: $concept, user: $user) {\n    id\n    title\n    src\n    contentType\n    published\n  }\n}"];

export function appGql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;