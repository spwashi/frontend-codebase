import {ITag, ITagIdentifyingPartial} from '@junction/models/tag/models';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {TagContext} from '../context/context';

export const gqlQueryNode_TAG = gql`
    query OneTag($id: Int!) {
        tag(id: $id) {
            id
            domain
            title
            description
        }
    }
`;

export function OneTagQuery({id}: ITagIdentifyingPartial) {
  const context  = useContext(TagContext) ?? ({} as any);
  const {setTag} = context;

  const {data: query} = useQuery(gqlQueryNode_TAG, {variables: {id} as ITagIdentifyingPartial});
  const {tag}         = query ?? {};

  useEffect(() => {
    if (tag && setTag) {
      setTag(tag as ITag);
    }
  }, [tag, setTag]);

  return <></>
}