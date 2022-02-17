import {FeatureRequirement} from '../_util';
import {CreateEventForm} from './behaviors/create';
import {RestrictedTagEventForm} from './behaviors/tag';
import React from 'react';
import {EventFeatures} from './Features';
import {EventDisplayForm} from './components/display/DisplayForm';
import {AllEventsEventDisplay} from './components/graphql/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '../tags/Features';
import {UserFeatures} from '../users/Features';
import {RestrictedEditEventForm} from './behaviors/edit';

export function EventsControlPanel() {
    return (
        <React.Fragment>
            <UserFeatures/>
            <EventFeatures/>
            <TagFeatures/>

            <NavLink to="/events">Event Home</NavLink>
            <NavLink to="all">All Events</NavLink>
            <FeatureRequirement name="events" alternative={"Need Events"}>
                <Routes>
                    <Route path={'all'} element={<div style={{width: 500 + 'px'}}><AllEventsEventDisplay/></div>}/>
                    <Route path="" element={
                        <section>
                            <CreateEventForm/>
                            <RestrictedEditEventForm/>
                            <FeatureRequirement name="events.display" alternative={"Need Events Display"}>
                                <EventDisplayForm/>
                                <FeatureRequirement name="tags.display" alternative={"Need Tags Display"}>
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