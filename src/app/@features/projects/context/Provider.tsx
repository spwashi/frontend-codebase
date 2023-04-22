import React, { useMemo, useState } from "react";
import { ProjectContext, IProjectContext } from "./context";

type IProjectContextProviderParams = {
  children?: any;
  project?: IProjectContext["project"];
};

/** Provides an ProjectContext */
export function ProjectGate(params: IProjectContextProviderParams) {
  const [project, setProject] = useState(params.project ?? null);
  const context = useMemo(() => ({ project, setProject }), [project]);

  return (
    <ProjectContext.Provider value={context}>
      {params.children}
    </ProjectContext.Provider>
  );
}
