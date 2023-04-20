import React, { useMemo, useState } from "react";
import { ITag_Complete } from "@junction/models/tag/hybrids";
import { TagContext } from "./context";

type ITagContextState = {
  setTag: (tag: ITag_Complete) => void;
  tag: ITag_Complete | null;
};
export function TagContextProvider({ children }: { children: any }) {
  const [tag, setTag] = useState<ITag_Complete | null>(null);
  const context = useMemo(
    (): ITagContextState => ({ tag: tag ?? null, setTag }),
    [tag]
  );

  return <TagContext.Provider value={context}>{children}</TagContext.Provider>;
}
