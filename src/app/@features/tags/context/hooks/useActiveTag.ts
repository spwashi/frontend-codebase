import { useContext } from "react";
import { TagContext } from "../context";

export function useActiveTag() {
  const { tag } = useContext(TagContext);

  return tag ?? null;
}
