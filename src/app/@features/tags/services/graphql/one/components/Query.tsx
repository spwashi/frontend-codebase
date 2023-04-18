import {ITag, ITagIdentifyingPartial} from '@junction/models/tag/models';
import {useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {TagContext} from '../context/context';
import {gqlQueryNode_TAG} from '@features/tags/services/graphql/queries/one/query';

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