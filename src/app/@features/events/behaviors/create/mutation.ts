// Define mutation
import {gql, useMutation} from '@apollo/client';

export const CREATE_EVENT_MUTATION = gql`
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
  const [send, response] = useMutation(CREATE_EVENT_MUTATION);
  return {send, response};
}