import { DocumentNode, useApolloClient, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useChangeEffect } from "@core/hooks/useChangeEffect";
import { ACTION_GRAPHQL, ACTION_NOGRAPHQL } from "../../redux/reducer";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export function useDispatchGraphqlError(error: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (/Failed to fetch/i.test(error?.message ?? "")) {
      dispatch({ type: ACTION_NOGRAPHQL });
      return;
    }
    if (!error) {
      dispatch({ type: ACTION_GRAPHQL });
    }
  }, [error]);
}

export function useFeatureQuery(node: TypedDocumentNode, variables, changeKey) {
  const client = useApolloClient();
  const { data = {}, error } = useQuery(node, { variables: variables ?? {} });
  useChangeEffect(() => {
    client.refetchQueries({ include: [node] });
  }, [changeKey, client]);
  useDispatchGraphqlError(error);
  return { data: data, error };
}
