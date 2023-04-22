import { useContext } from "react";
import { ProjectContext } from "../context";
import { Project } from "../../../../../__generated__/graphql";

export function useActiveProject(): Project | null {
  const { project = null } = useContext(ProjectContext);

  return project ?? null;
}
