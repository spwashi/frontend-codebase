import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFeatureQuery } from "@services/features/hooks/useFeatureQuery";
import { getDomain } from "@widgets/form/features/fields/components/FieldFactory";
import { ACTION_RECEIVE_ALL_PROJECTS } from "../../../redux/reducer";
import {
  selectPossibleProjectsLastFetched,
  selectProjectStateKey,
} from "../../../redux/selectors";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export function ProjectListQuery() {
  const projectStateKey = useSelector(selectProjectStateKey);
  const { data } = useFeatureQuery(
    graphQlNodes.project.fetchList,
    { domain: getDomain() },
    projectStateKey
  );
  const lastFetched = useSelector(selectPossibleProjectsLastFetched);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ACTION_RECEIVE_ALL_PROJECTS,
      payload: data.projectList ? data.projectList : [],
    });
  }, [data.projectList]);

  return !lastFetched ? <>Loading...</> : null;
}
