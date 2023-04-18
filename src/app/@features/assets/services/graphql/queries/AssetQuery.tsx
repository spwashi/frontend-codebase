import {useQuery} from '@apollo/client';
import {AssetContents} from '../../../behaviors/display/components/AssetContents';
import React from 'react';
import {gqlQueryNode_ASSET} from '@features/assets/services/graphql/queries/one/query';

export function AssetQuery({realname, username}: { realname: string, username?: string }) {
  const {data: query = {}} = useQuery(gqlQueryNode_ASSET, {variables: {username, realname}});
  if (!query.asset) return null;
  const {name, contentType} = query?.asset ?? {};

  return <AssetContents realname={realname} name={name} contentType={contentType}/>
}