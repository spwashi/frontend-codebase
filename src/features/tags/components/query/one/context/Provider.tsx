import React, {useMemo, useState} from 'react';
import {TagContext as TagContext} from './context';
import {ITag_Complete} from '../../../../../../models';

export function TagContextProvider({children}: { children: any }) {
    const [tag, setTag] = useState<ITag_Complete | null>(null);
    const context               =
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