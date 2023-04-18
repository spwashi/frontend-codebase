// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlNode_EVENT_EDIT = gql`
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
  const [send, response] = useMutation(gqlNode_EVENT_EDIT);
  return {send, response};
}