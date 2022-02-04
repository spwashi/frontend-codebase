// Define mutation
import {gql, useMutation} from '@apollo/client';

const CREATE_EVENT = gql`
    mutation CreateEvent($event: CreateEventInput, $user: UserReferenceInput) {
        createEvent(event: $event, user:$user) {
            title
            id
            description
            published
        }
    }
`;
export function useCreateEventMutation() {
    const [send, response] = useMutation(CREATE_EVENT);
    return {send, response};
}