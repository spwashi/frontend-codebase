import { useContext } from "react";
import { ProjectContext } from "../context";
import { Project } from '@generated/graphql';

export function useActiveProject(): Project | null {
  const { project = null } = useContext(ProjectContext);

  return project ?? null;
}
