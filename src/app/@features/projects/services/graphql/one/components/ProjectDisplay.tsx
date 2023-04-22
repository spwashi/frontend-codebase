import React from "react";
import { useActiveProject } from "../../../../context/hooks/useActiveProject";
import { Project } from '@generated/graphql';

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
