import React from "react";
import { IProject } from "@junction/models/project/models";
import { useActiveProject } from "../../../../context/hooks/useActiveOne";

interface ProjectParams {
  project: IProject;
}

export function ProjectWidget({ project }: ProjectParams) {
  const { title, domain, description } = project as IProject;
  return (
    <>
      <details open>
        <summary>{title}</summary>
        <section>
          <div>{title}</div>
          <div>{domain}</div>
          <div>{description}</div>
        </section>
      </details>
    </>
  );
}
export function ActiveProject() {
  const project = useActiveProject();
  if (!project) return null;
  return <ProjectWidget project={project} />;
}
