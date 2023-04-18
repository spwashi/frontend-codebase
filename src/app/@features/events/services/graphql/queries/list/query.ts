import {gql} from '@apollo/client';

export const gqlQueryNode_EVENT_LIST = gql`
    query EventList {
        eventList {
            id
            title
            start
            startDate
            end
            endDate
            description
            published
        }
    }
`;