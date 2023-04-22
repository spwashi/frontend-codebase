import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useChangeEffect } from "@core/hooks/useChangeEffect";
import { ProjectGate } from "../../../context/ProjectGate";
import { ProjectContext } from "../../../context/context";
import { ACTION_PROJECT_SELECTED } from "../../redux/reducer";
import { ActiveProject } from "./components/ProjectDisplay";
import { ProjectQuery } from "./components/ProjectQuery";
import { ProjectReferenceInput } from "../../../../../../__generated__/graphql";

function SiteProjectDeactivateButton() {
  const context = useContext(ProjectContext);
  if (!context.project) return null;
  return (
    <button
      onClick={() => {
        context.setProject(null);
      }}
    >
      [deactivate project]
    </button>
  );
}

function SiteProjectAutoActivator() {
  const context = useContext(ProjectContext);
  const project = context.project;

  const dispatch = useDispatch();
  useChangeEffect(() => {
    dispatch({
      type: ACTION_PROJECT_SELECTED,
      payload: { project, test: "boon" },
    });
  }, [project, dispatch]);

  return <></>;
}

/**
 * Fetches a Project
 */
export function Project({ id }: ProjectReferenceInput) {
  return (
    <ProjectGate>
      {id && <ProjectQuery id={id} />}
      <ActiveProject />
      <SiteProjectAutoActivator />
      <SiteProjectDeactivateButton />
    </ProjectGate>
  );
}
