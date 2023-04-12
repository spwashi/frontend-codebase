import {AllUsersQuery} from './features/users/components/query/all';
import {AllConceptsQuery} from './features/concepts/components/graphql/all/components/FindAll';
import {AllTagsQuery} from './features/tags/components/query/all';
import React from 'react';
import {AllProjectsQuery} from './features/projects/components/query/all/all';
import {AllScenesQuery} from './features/scenes/components/graphql/all/components/FindAll';
import {AllEventsQuery} from './features/events/components/graphql/all/components/FindAll';

export function Bootstrap() {
  return (
    <>
      <AllUsersQuery/>
      <AllProjectsQuery/>
      <AllConceptsQuery/>
      <AllEventsQuery/>
      <AllScenesQuery/>
      <AllTagsQuery/>
    </>
  );
}