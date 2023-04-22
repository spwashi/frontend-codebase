import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import {
  IProject,
  IProjectIdentifyingPartial,
} from "@junction/models/project/models";
import { ProjectContext } from "../../../../context/context";
import { graphQlNodes } from '@/graphQlNodes';

export function ProjectQuery({ id }: IProjectIdentifyingPartial) {
  const context = useContext(ProjectContext);
  let query: any;
  ({ data: query } = useQuery(graphQlNodes.project.fetch, {
    variables: { project: { id } },
  }));
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
