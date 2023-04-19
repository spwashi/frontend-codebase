// Define mutation
import { gql, useMutation } from "@apollo/client";

export const gqlNode_CONCEPT_CREATE = gql`
  mutation CreateConcept(
    $concept: CreateConceptInput
    $user: UserReferenceInput
  ) {
    createConcept(concept: $concept, user: $user) {
      id
      title
      src
      published
      contentType
    }
  }
`;

export function useCreateConceptMutation() {
  const [send, response] = useMutation(gqlNode_CONCEPT_CREATE);
  return { send, response };
}
