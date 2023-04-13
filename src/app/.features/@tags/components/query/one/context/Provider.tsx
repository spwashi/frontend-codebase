import React, {useMemo, useState} from 'react';
import {TagContext} from './context';
import {ITag_Complete} from '../../../../../../../.junction/models/tag/hybrids';

export function TagContextProvider({children}: { children: any }) {
  const [tag, setTag] = useState<ITag_Complete | null>(null);
  const context       =
          useMemo(() => ({
            tag: tag ?? null,
            setTag,
          }), [tag]);

  return (
    <TagContext.Provider value={context}>
      {children}
    </TagContext.Provider>
  )
}