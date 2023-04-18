import {gql} from '@apollo/client';

export const gqlMutationNode_DELETE_TAG = gql`
    mutation DeleteTag($user:UserReferenceInput!, $tag: DeleteTagInput!) {
        deleteTag(tag: $tag, user: $user) {
            title
            domain
        }
    }
`;