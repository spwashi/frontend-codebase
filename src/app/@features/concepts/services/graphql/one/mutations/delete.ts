import { gql, useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export const gqlNode_CONCEPT_DELETE = gql`
  mutation DeleteConcept($id: String!) {
    deleteConcept(concept: { id: $id }) {
      id
    }
  }
`;
export function useDeleteConceptMutation() {
  return useMutation(graphQlNodes.concept.delete);
}
