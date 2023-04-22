import React, { useMemo, useState } from "react";
import { TagContext, ITagContext } from "./context";

type ITagContextProviderParams = {
  children?: any;
  tag?: ITagContext["tag"];
};

/** Provides an TagContext */
export function TagGate(params: ITagContextProviderParams) {
  const [tag, setTag] = useState(params.tag ?? null);
  const context = useMemo(() => ({ tag, setTag }), [tag]);

  return (
    <TagContext.Provider value={context}>{params.children}</TagContext.Provider>
  );
}
