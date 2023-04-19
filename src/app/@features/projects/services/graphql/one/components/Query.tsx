import {
  IProject,
  IProjectIdentifyingPartial,
} from "@junction/models/project/models";
import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../../../../context/context";
import { gqlNode_PROJECT_FETCH_ONE } from "@features/projects/services/graphql/one/queries/fetchOne";

export function OneProjectQuery({ id }: IProjectIdentifyingPartial) {
  const context = useContext(ProjectContext);
  const { data: query } = useQuery(gqlNode_PROJECT_FETCH_ONE, {
    variables: { id },
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
