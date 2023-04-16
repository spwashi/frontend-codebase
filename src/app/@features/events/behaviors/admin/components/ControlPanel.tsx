import {CreateEventFormFeature} from '../../create';
import {TagEventFormFeature} from '../../tag';
import React from 'react';
import {EventFeatures} from '../../../components/Features';
import {EventDisplayFormFeature} from '../../../components/display/DisplayForm';
import {AllEventsEventDisplay} from '../../../services/graphql/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '@features/tags/components/Features';
import {UserFeatures} from '@features/users/components/Features';
import {EditEventFormFeature} from '../../edit';
import {eventFeatureName} from '@features/events/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';

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
            <LoggedIn>
              <CreateEventFormFeature/>
              <EditEventFormFeature/>
              <EventDisplayFormFeature/>
              <TagEventFormFeature/>
            </LoggedIn>
          }/>
        </Routes>
      </FeatureRequirement>
    </React.Fragment>
  );
}