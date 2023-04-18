import {gql} from '@apollo/client';

export const gqlNode_TAG_DELETE = gql`
    mutation DeleteTag($user:UserReferenceInput!, $tag: DeleteTagInput!) {
        deleteTag(tag: $tag, user: $user) {
            title
            domain
        }
    }
`;