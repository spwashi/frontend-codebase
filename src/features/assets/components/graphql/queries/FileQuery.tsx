import {gql, useQuery} from '@apollo/client';
import {FileContents} from '../../display/FileContents';
import React from 'react';

export function FileQuery({realname, username}: { realname: string, username?: string }) {
  const {data: query = {}} = useQuery(gql`
      query File($realname: String!) {
          file( realname: $realname) {
              name
              realname
              contentType
              uri
          }
      }
  `, {variables: {username, realname}});
    if (!query.file) return null;
    const {name: filename, contentType} = query?.file ?? {};

    return <FileContents realname={realname} name={filename} contentType={contentType}/>
}