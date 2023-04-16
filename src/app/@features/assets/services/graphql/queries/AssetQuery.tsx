import {gql, useQuery} from '@apollo/client';
import {AssetContents} from '../../../behaviors/display/components/AssetContents';
import React from 'react';

export const ASSET_QUERY = gql`
    query Asset($realname: String!) {
        asset( realname: $realname) {
            name
            realname
            contentType
            uri
        }
    }
`;

export function AssetQuery({realname, username}: { realname: string, username?: string }) {
  const {data: query = {}} = useQuery(ASSET_QUERY, {variables: {username, realname}});
  if (!query.asset) return null;
  const {name, contentType} = query?.asset ?? {};

  return <AssetContents realname={realname} name={name} contentType={contentType}/>
}