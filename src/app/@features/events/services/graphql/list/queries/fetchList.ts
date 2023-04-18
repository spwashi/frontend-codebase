import {gql} from '@apollo/client';

export const gqlNode_EVENT_FETCH_LIST = gql`
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