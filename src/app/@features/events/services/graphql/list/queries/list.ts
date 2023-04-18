import {gql} from '@apollo/client';

export const gqlNode_EVENT_FINDALL = gql`
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