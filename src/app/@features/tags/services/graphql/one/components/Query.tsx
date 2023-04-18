import {ITag, ITagIdentifyingPartial} from '@junction/models/tag/models';
import {useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {TagContext} from '../context/context';
import {gqlNode_TAG_FINDONE} from '@features/tags/services/graphql/queries/one/find';

export function OneTagQuery({id}: ITagIdentifyingPartial) {
  const context  = useContext(TagContext) ?? ({} as any);
  const {setTag} = context;

  const {data: query} = useQuery(gqlNode_TAG_FINDONE, {variables: {id} as ITagIdentifyingPartial});
  const {tag}         = query ?? {};

  useEffect(() => {
    if (tag && setTag) {
      setTag(tag as ITag);
    }
  }, [tag, setTag]);

  return <></>
}