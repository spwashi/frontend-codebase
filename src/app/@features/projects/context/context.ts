import { createContext } from "react";
import { Project } from '@generated/graphql';

export type IProjectContext = {
  project: Project | null;
  setProject: (project: Project | null) => void;
};

export const ProjectContext = createContext<IProjectContext>({
  project: null,
  setProject() {},
});
