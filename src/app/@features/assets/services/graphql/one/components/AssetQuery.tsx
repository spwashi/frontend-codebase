import { useQuery } from "@apollo/client";
import React from "react";
import { graphQlNodes } from "@/graphql/nodes";
import { AssetContents } from "../../../../behaviors/display/components/AssetContents";

export function AssetQuery({ realname }: { realname: string }) {
  const { data: query = {} } = useQuery(graphQlNodes.asset.fetch, {
    variables: { asset: { realname } },
  });
  if (!query.asset) return null;
  const { name, contentType } = query?.asset ?? {};

  return (
    <AssetContents realname={realname} name={name} contentType={contentType} />
  );
}
