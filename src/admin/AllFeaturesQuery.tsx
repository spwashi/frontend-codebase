import React from 'react';
import {AllUsersQuery} from '../app/.features/.users/components/query/all';
import {AllConceptsQuery} from '../app/.features/.concepts/components/graphql/all/components/FindAll';
import {AllTagsQuery} from '../app/.features/.tags/components/query/all';
import {AllProjectsQuery} from '../app/.features/.projects/components/query/all/all';
import {AllScenesQuery} from '../app/.features/.scenes/components/graphql/all/components/FindAll';
import {AllEventsQuery} from '../app/.features/.events/components/graphql/all/components/FindAll';

export function AllFeaturesQuery() {
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