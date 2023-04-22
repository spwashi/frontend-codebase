import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { graphQlNodes } from "@/graphQlNodes";
import { ProjectContext } from "../../../../context/context";
import {
  Project,
  ProjectReferenceInput,
} from "../../../../../../../__generated__/graphql";

export function ProjectQuery({ id }: ProjectReferenceInput) {
  const context = useContext(ProjectContext);
  const { data: query } = useQuery(graphQlNodes.project.fetch, {
    variables: { project: { id } },
  });
  const { project } = query ?? {};
  const { setProject } = context;

  useEffect(() => {
    if (project && setProject) {
      setProject(project as Project);
    }
  }, [project, setProject]);

  return (
    <>
      {project?.id} {id} {JSON.stringify(query)}
    </>
  );
}
