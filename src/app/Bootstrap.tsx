import {AllUsersQuery} from '../features/old/users/components/AllUsersQuery';
import {AllProjectsQuery} from '../features/old/projects/components/AllProjectsQuery';
import {AllConceptsQuery} from '../features/new/concepts/components/query/all';
import {AllTagsQuery} from '../features/new/tags/components/query/all';
import React from 'react';

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