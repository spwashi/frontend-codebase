import {useQuery} from '@apollo/client';
import {AssetContents} from '../../../behaviors/display/components/AssetContents';
import React from 'react';
import {gqlNode_ASSET_FINDONE} from '@features/assets/services/graphql/queries/one/find';

export function AssetQuery({realname, username}: { realname: string, username?: string }) {
  const {data: query = {}} = useQuery(gqlNode_ASSET_FINDONE, {variables: {username, realname}});
  if (!query.asset) return null;
  const {name, contentType} = query?.asset ?? {};

  return <AssetContents realname={realname} name={name} contentType={contentType}/>
}