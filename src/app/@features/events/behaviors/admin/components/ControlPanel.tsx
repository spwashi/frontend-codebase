import React from 'react';
import {EventFeatures} from '../../../components/Features';
import {EventDisplayFormFeature} from '../../display/components/EventDisplayFormFeature';
import {EventListDisplay} from '@features/events/services/graphql/list/components/ListDisplay';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '@features/tags/components/Features';
import {UserFeatures} from '@features/users/components/Features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {LoginRequirement} from '@features/users/behaviors/login/components/LoginRequirement';
import {featureId__events} from '../../../../../@/featureIds';
import {EventTagFormFeature} from '../../tag/components/EventTagFormFeature';
import {EventCreateFormFeature} from '../../create/components/EventCreateFormFeature';
import {EventEditFormFeature} from '../../edit/components/EventEditFormFeature';

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

      <FeatureRequirement name={featureId__events} alternative={'Need Events for Admin.All Events Route'}>
        <Routes>
          <Route path={'all'} element={<div style={{width: 500 + 'px'}}><EventListDisplay/></div>}/>
          <Route path="" element={
            <LoginRequirement>
              <EventCreateFormFeature/>
              <EventEditFormFeature/>
              <EventDisplayFormFeature/>
              <EventTagFormFeature/>
            </LoginRequirement>
          }/>
        </Routes>
      </FeatureRequirement>
    </React.Fragment>
  );
}