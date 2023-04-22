import { useQuery } from "@apollo/client";
import React from "react";
import { AssetContents } from "../../../../behaviors/display/components/AssetContents";
import { graphQlNodes } from '@/graphQlNodes';

export function AssetQuery({
  realname,
  username,
}: {
  realname: string;
  username?: string;
}) {
  const { data: query = {} } = useQuery(graphQlNodes.asset.fetch, {
    variables: { asset: { realname } },
  });
  if (!query.asset) return null;
  const { name, contentType } = query?.asset ?? {};

  return (
    <AssetContents realname={realname} name={name} contentType={contentType} />
  );
}
