import {AllUsersQuery} from '../features/users/components/query/all';
import {AllConceptsQuery} from '../features/concepts/components/query/all';
import {AllTagsQuery} from '../features/tags/components/query/all';
import React from 'react';
import {AllProjectsQuery} from '../features/projects/components/query/all';

export function Bootstrap() {
    return (
        <>
            <AllUsersQuery/>
            <AllProjectsQuery/>
            <AllConceptsQuery/>
            <AllTagsQuery/>
        </>
    );
}