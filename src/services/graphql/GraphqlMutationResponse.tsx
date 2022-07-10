import {MutationResult} from '@apollo/client';
import React from 'react';
import {Loading} from './Loading';
import {isDev, NotDev} from '../../components/Dev';

class GraphQlError extends Error {
  constructor(error: MutationResult['error']) {
    super();
    if (!error) return;
    let oneError = error.graphQLErrors.length === 1;
    let firstErr = error.graphQLErrors[0];
    Object.assign(this, {
      error:   true,
      message: oneError ? firstErr.message : undefined,
      kind:    oneError ? (firstErr.extensions.code === 'INTERNAL_SERVER_ERROR' ? 500 : null) : null,
      orig:    error,
    })
  }

}

export function GraphqlMutationResponse({response}: { response: MutationResult }) {
  const {data, loading, error} = response;

  if (loading) return <Loading/>;
  if (data) return <pre>{JSON.stringify(data)}</pre>
  if (!error) return null;

  const graphQlError = new GraphQlError(error);
  return (
    <>
      <NotDev>{()=> {throw graphQlError}}</NotDev>
      <pre>{JSON.stringify(graphQlError ?? data, null, 3)}</pre>
    </>
  );
}