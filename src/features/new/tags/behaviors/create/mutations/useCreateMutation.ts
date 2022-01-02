// Define mutation
import {gql, useMutation} from '@apollo/client';

const CREATE_TAG = gql`
    mutation CreateTag($domain:String, $title:String!, $description: String, $user: UserInput!) {
        createTag(tag: {domain: $domain, title: $title, description: $description, author: $user}) {
            title
            domain  
        }
    }
`;
export function useCreateTagMutation() {
    const [send, response] = useMutation(CREATE_TAG);
    return {send, response};
}