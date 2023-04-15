import {FeatureRequirement} from '@services/features/components/Feature';
import {CreateEventForm} from '../../create';
import {RestrictedTagEventForm} from '../../tag';
import React from 'react';
import {EventFeatures} from '../../../components/Features';
import {EventDisplayForm} from '../../../components/display/DisplayForm';
import {AllEventsEventDisplay} from '../../../services/graphql/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '../../../../tags/components/Features';
import {UserFeatures} from '../../../../users/components/Features';
import {RestrictedEditEventForm} from '../../edit';
import {AllTagsQuery} from '../../../../tags/services/graphql/all';
import {AllEventsQuery} from '../../../services/graphql/all/components/FindAll';
import {tagDisplayFeatureName} from '@features/tags/features';
import {eventDisplayFeatureName, eventFeatureName} from '@features/events/features';

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

      <FeatureRequirement name={eventFeatureName} alternative={'Need Events for Admin.All Events Route'}>
        <Routes>
          <Route path={'all'} element={<div style={{width: 500 + 'px'}}><AllEventsEventDisplay/></div>}/>
          <Route path="" element={
            <section>
              <AllEventsQuery/>
              <CreateEventForm/>
              <RestrictedEditEventForm/>
              <FeatureRequirement name={eventDisplayFeatureName} alternative={'Need Events Display for Admin.Display Events Route'}>
                <AllTagsQuery/>
                <EventDisplayForm/>
                <FeatureRequirement name={tagDisplayFeatureName} alternative={'Need Tags Display for Admin.TagEvent Form'}>
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