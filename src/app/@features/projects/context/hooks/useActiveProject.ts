import { useContext } from "react";
import { Project } from '@generated/graphql';
import { ProjectContext } from "../context";

export function useActiveProject(): Project | null {
  const { project = null } = useContext(ProjectContext);

  return project ?? null;
}
