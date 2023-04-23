import React from "react";
import { Project } from '@generated/graphql';
import { useActiveProject } from "../../../../context/hooks/useActiveProject";

interface ProjectParams {
  project: Project;
}

export function ProjectDisplay({ project }: ProjectParams) {
  const { title, domain, description } = project as Project;
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
  return <ProjectDisplay project={project} />;
}
