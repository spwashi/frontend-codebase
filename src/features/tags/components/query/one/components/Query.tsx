import {ITag, ITagIdentifyingPartial} from '../../../../../../app/models/tag/models';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {TagContext} from '../context/context';

const TAG_QUERY = gql`
    query OneTag($id: Int!) {
        tag(id: $id) {
            id
            domain
            title
            description
            user {
                username
                name
            }

        }
    }
`;

export function OneTagQuery({id}: ITagIdentifyingPartial) {
    const context  = useContext(TagContext) ?? ({} as any);
    const {setTag} = context;

    const {data: query} = useQuery(TAG_QUERY, {variables: {id} as ITagIdentifyingPartial});
    const {tag}         = query ?? {};

    useEffect(() => {
        if (tag && setTag) {
            setTag(tag as ITag);
        }
    }, [tag, setTag]);

    return <></>
}