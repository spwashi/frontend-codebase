import {gql, useQuery} from '@apollo/client';
import React from 'react';

export function TagQuery({title}: { title: string }) {
  const {data: query = {}} = useQuery(gql`
      query Tag($title: String!) {
          tag(title: $title) {
              title
              author {
                  username
                  name
              }
          }
      }
  `, {variables: {title}});

    if (!query.tag) return null;

    return (
        <details open>
            <summary>{title}</summary>
            <section>
                <pre>{JSON.stringify(query?.tag, null, 3)}</pre>
            </section>
        </details>
    )
}