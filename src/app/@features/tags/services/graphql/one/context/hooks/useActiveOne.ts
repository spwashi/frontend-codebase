import { useContext } from "react";
import { ITag_Complete } from "@junction/models/tag/hybrids";
import { TagContext } from "../context";

export function useActiveTag(): ITag_Complete | null {
  const { tag = null } = useContext(TagContext) ?? {};

  return tag ?? null;
}
