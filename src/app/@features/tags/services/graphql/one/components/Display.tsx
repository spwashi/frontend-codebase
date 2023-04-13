import {useActiveTag} from '../context/hooks/useActiveOne';
import React from 'react';
import {ITag_Complete} from '@junction/models/tag/hybrids';

export function TagDisplay() {
  const tag = useActiveTag();
  if (!tag) return null;

  const {title, domain} = tag as ITag_Complete;
  return (
    <>
      <details open>
        <summary>{title}</summary>
        <section>
          <div>{title}</div>
          <div>{domain}</div>

        </section>
      </details>
    </>
  )
}