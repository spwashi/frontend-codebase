import { useApolloClient, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useChangeEffect } from "@core/hooks/useChangeEffect";
import { ACTION_GRAPHQL, ACTION_NOGRAPHQL } from "../../redux/reducer";

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

export function useFeatureQuery(
  node: TypedDocumentNode<any, any>,
  variables?: any,
  changeKey?: any
) {
  const client = useApolloClient();
  const { data = {}, error } = useQuery(node, { variables: variables ?? {} });
  useChangeEffect(() => {
    client.refetchQueries({ include: [node] });
  }, [changeKey, client]);
  useDispatchGraphqlError(error);
  return { data: data, error };
}
