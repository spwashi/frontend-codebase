import {MutationResult} from '@apollo/client';
import React from 'react';

export function GraphqlMutationResponse({response}: { response: MutationResult }) {
    const {data, loading, error} = response;

    if (loading) return <>Loading</>;

    return <pre>{JSON.stringify(error ?? data, null, 3)}</pre>;
}