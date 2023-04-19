import { useContext } from "react";
import { IProject } from "@junction/models/project/models";
import { ProjectContext } from "../context";

export function useActiveProject(): IProject | null {
  const { project = null } = useContext(ProjectContext);

  return project ?? null;
}
