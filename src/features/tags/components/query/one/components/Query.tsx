import {ITag, ITagIdentifyingPartial} from '../../../../../../models/tag/models/ITag';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {TagContext} from '../context/context';

const TAG_QUERY = gql`
    query Tag($title: String!) {
        tag(title: $title) {
            id
            title
            domain
            description
            author {
                username
                name
            }

        }
    }
`;

export function OneTagQuery({title}: ITagIdentifyingPartial) {
    const context  = useContext(TagContext) ?? ({} as any);
    const {setTag} = context;

    const {data: query} = useQuery(TAG_QUERY, {variables: {title}});
    const {tag}         = query ?? {};

    useEffect(() => {
        if (tag && setTag) {
            setTag(tag as ITag);
        }
    }, [tag, setTag]);

    return <></>
}