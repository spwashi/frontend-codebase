import React from 'react';
import {AllUsersQuery} from '../users/_services/.graphql/all';
import {AllConceptsQuery} from '../concepts/_services/.graphql/all/components/FindAll';
import {AllTagsQuery} from '../tags/_services/.graphql/all';
import {AllProjectsQuery} from '../projects/_services/.graphql/all/all';
import {AllScenesQuery} from '../scenes/_services/.graphql/all/components/FindAll';
import {AllEventsQuery} from '../events/_services/.graphql/all/components/FindAll';

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