import React from 'react';
import {AllUsersQuery} from '../.users/components/query/all';
import {AllConceptsQuery} from '../.concepts/components/graphql/all/components/FindAll';
import {AllTagsQuery} from '../.tags/components/query/all';
import {AllProjectsQuery} from '../.projects/components/query/all/all';
import {AllScenesQuery} from '../.scenes/components/graphql/all/components/FindAll';
import {AllEventsQuery} from '../.events/components/graphql/all/components/FindAll';

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