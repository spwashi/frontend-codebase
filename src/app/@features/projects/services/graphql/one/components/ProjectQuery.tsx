import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import {
  IProject,
  IProjectIdentifyingPartial,
} from "@junction/models/project/models";
import { graphQlNodes } from "@/graphQlNodes";
import { ProjectContext } from "../../../../context/context";

export function ProjectQuery({ id }: IProjectIdentifyingPartial) {
  const context = useContext(ProjectContext);
  const { data: query } = useQuery(graphQlNodes.project.fetch, {
    variables: { project: { id } },
  });
  const { project } = query ?? {};
  const { setProject } = context;

  useEffect(() => {
    if (project && setProject) {
      setProject(project as IProject);
    }
  }, [project, setProject]);

  return (
    <>
      {project?.id} {id} {JSON.stringify(query)}
    </>
  );
}
