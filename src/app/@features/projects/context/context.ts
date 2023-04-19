import { createContext } from "react";
import { IProject } from "@junction/models/project/models";

type IProjectContext = {
  project: IProject | null;
  setProject: (project: IProject | null) => void;
};
export const ProjectContext = createContext<IProjectContext>({
  project: null,
  setProject: () => {
    console.log("project set");
  },
});
