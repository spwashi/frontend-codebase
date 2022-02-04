import {gql, useQuery} from '@apollo/client';
import {FileContents} from '../../display/FileContents';
import React from 'react';

export function FileQuery({realname, username}: { realname: string, username: string }) {
  const {data: query = {}} = useQuery(gql`
      query File($realname: String!) {
          file( realname: $realname) {
              name
              realname
              mimeType
              uri
          }
      }
  `, {variables: {username, realname}});
    if (!query.file) return null;
    const {name: filename, mimeType} = query?.file ?? {};

    return <FileContents realname={realname} name={filename} mimeType={mimeType}/>
}