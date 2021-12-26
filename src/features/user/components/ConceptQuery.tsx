import {gql, useQuery} from '@apollo/client';
import React from 'react';

export function ConceptQuery({title}: { title: string }) {
  const {data: query = {}} = useQuery(gql`
      query Concept($title: String) {
          concept(title: $title) {
              title
              src
              mimeType
              author {
                  username
                  name
              }
          }
      }
  `, {variables: {title}});

    if (!query.concept) return null;

    return (
        <details open>
            <summary>{title}</summary>
            <section>
                <pre>{JSON.stringify(query?.concept, null, 3)}</pre>
            </section>
        </details>
    )
}