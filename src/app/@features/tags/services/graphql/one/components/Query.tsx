import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { ITag, ITagIdentifyingPartial } from "@junction/models/tag/models";
import { gqlNode_TAG_FETCH_ONE } from "@features/tags/services/graphql/one/queries/fetchOne";
import { TagContext } from "../context/context";

export function OneTagQuery({ id }: ITagIdentifyingPartial) {
  const context = useContext(TagContext) ?? ({} as any);
  const { setTag } = context;

  const { data: query } = useQuery(gqlNode_TAG_FETCH_ONE, {
    variables: { id } as ITagIdentifyingPartial,
  });
  const { tag } = query ?? {};

  useEffect(() => {
    if (tag && setTag) {
      setTag(tag as ITag);
    }
  }, [tag, setTag]);

  return <></>;
}
