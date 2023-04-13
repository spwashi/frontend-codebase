import {FeatureRequirement} from '../../../../_services/features/components/Feature';
import {CreateEventForm} from '../create';
import {RestrictedTagEventForm} from '../tag';
import React from 'react';
import {EventFeatures} from '../../components/Features';
import {EventDisplayForm} from '../../components/display/DisplayForm';
import {AllEventsEventDisplay} from '../../_services/.graphql/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '../../../tags/components/Features';
import {UserFeatures} from '../../../users/components/Features';
import {RestrictedEditEventForm} from '../edit';
import {AllTagsQuery} from '../../../tags/_services/.graphql/all';
import {AllEventsQuery} from '../../_services/.graphql/all/components/FindAll';

export function EventsControlPanel() {
  return (
    <React.Fragment>
      <UserFeatures/>
      <EventFeatures/>
      <TagFeatures/>

      <nav>
        <ul>
          <li><NavLink to="../events">Event Home</NavLink></li>
          <li><NavLink to="../events/all">All Events</NavLink></li>
        </ul>
      </nav>

      <FeatureRequirement name="events" alternative={'Need Events for Admin.All Events Route'}>
        <Routes>
          <Route path={'all'} element={<div style={{width: 500 + 'px'}}><AllEventsEventDisplay/></div>}/>
          <Route path="" element={
            <section>
              <AllEventsQuery/>
              <CreateEventForm/>
              <RestrictedEditEventForm/>
              <FeatureRequirement name="events.display" alternative={'Need Events Display for Admin.Display Events Route'}>
                <AllTagsQuery/>
                <EventDisplayForm/>
                <FeatureRequirement name="tags.display" alternative={'Need Tags Display for Admin.TagEvent Form'}>
                  <RestrictedTagEventForm/>
                </FeatureRequirement>
              </FeatureRequirement>
            </section>
          }/>
        </Routes>
      </FeatureRequirement>
    </React.Fragment>
  );
}