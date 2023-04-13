import {gql, useQuery} from '@apollo/client';
import {AssetContents} from '../../display/AssetContents';
import React from 'react';

export function AssetQuery({realname, username}: { realname: string, username?: string }) {
  const {data: query = {}} = useQuery(gql`
      query Asset($realname: String!) {
          asset( realname: $realname) {
              name
              realname
              contentType
              uri
          }
      }
  `, {variables: {username, realname}});
  if (!query.asset) return null;
  const {name, contentType} = query?.asset ?? {};

  return <AssetContents realname={realname} name={name} contentType={contentType}/>
}