import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { IProjectIdentifyingPartial } from "@junction/models/project/models";
import { useChangeEffect } from "@core/hooks/useChangeEffect";
import { ProjectGate } from "../../../context/Provider";
import { ProjectContext } from "../../../context/context";
import { ACTION_PROJECT_SELECTED } from "../../redux/reducer";
import { ActiveProject } from "./components/ProjectWidget";
import { ProjectQuery } from "./components/ProjectQuery";

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
 * Fetches and caches a project in Local Storage
 */
export function SiteProjectController({ id }: IProjectIdentifyingPartial) {
  return (
    <ProjectGate>
      {id && <ProjectQuery id={id} />}
      <ActiveProject />
      <SiteProjectAutoActivator />
      <SiteProjectDeactivateButton />
    </ProjectGate>
  );
}
