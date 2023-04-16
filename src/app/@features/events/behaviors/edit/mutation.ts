// Define mutation
import {gql, useMutation} from '@apollo/client';

export const EDIT_EVENT_MUTATION = gql`
    mutation EditEvent($event: EditEventInput, $user: UserReferenceInput) {
        editEvent(event: $event, user: $user) {
            id
            title
            description
            start
            startDate
            end
            endDate
        }
    }
`;
export function useEditEventMutation() {
  const [send, response] = useMutation(EDIT_EVENT_MUTATION);
  return {send, response};
}