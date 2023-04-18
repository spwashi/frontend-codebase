// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_CREATE_EVENT = gql`
    mutation CreateEvent($event: CreateEventInput, $user: UserReferenceInput) {
        createEvent(event: $event, user:$user) {
            id
            title
            description
            published
        }
    }
`;
export function useCreateEventMutation() {
  const [send, response] = useMutation(gqlMutationNode_CREATE_EVENT);
  return {send, response};
}