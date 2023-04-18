// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlNode_EVENT_CREATE = gql`
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
  const [send, response] = useMutation(gqlNode_EVENT_CREATE);
  return {send, response};
}