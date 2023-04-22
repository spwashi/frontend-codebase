import { createContext } from "react";
import { Project } from "../../../../__generated__/graphql";

export type IProjectContext = {
  project: Project | null;
  setProject: (project: Project | null) => void;
};

export const ProjectContext = createContext<IProjectContext>({
  project: null,
  setProject() {},
});
