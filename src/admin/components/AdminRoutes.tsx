import {Routes} from 'react-router-dom';
import {Route} from 'react-router';
import {adminPaths} from '../../.junction/routes/routes';
import {UsersControlPanel} from '../../app/.features/.users/components/ControlPanel';
import {ProjectsControlPanel} from '../../app/.features/.projects/components/ControlPanel';
import {ConceptsControlPanel} from '../../app/.features/.concepts/components/ControlPanel';
import {ScenesControlPanel} from '../../app/.features/.scenes/components/ControlPanel';
import {EventsControlPanel} from '../../app/.features/.events/components/ControlPanel';
import {TagsControlPanel} from '../../app/.features/.tags/components/ControlPanel';
import {AssetsControlPanel} from '../../app/.features/.assets/components/ControlPanel';
import {LoggedIn, NotLoggedIn} from '../../app/.features/.users/behaviors/login/Requirement';
import React from 'react';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path={adminPaths.admin._path} element={
        <Routes>
          <Route path="users/*" element={<UsersControlPanel/>}/>
          <Route path="projects/*" element={<ProjectsControlPanel/>}/>
          <Route path="concepts/*" element={<ConceptsControlPanel/>}/>
          <Route path="scenes/*" element={<ScenesControlPanel/>}/>
          <Route path="events/*" element={<EventsControlPanel/>}/>
          <Route path="tags/*" element={<TagsControlPanel/>}/>
          <Route path="assets/*" element={<AssetsControlPanel/>}/>
          <Route path="all/*" element={<>
            <NotLoggedIn>
              <UsersControlPanel/>
            </NotLoggedIn>
            <LoggedIn>
              <AssetsControlPanel/>
              <ConceptsControlPanel/>
              <EventsControlPanel/>
              <ScenesControlPanel/>
              <TagsControlPanel/>
            </LoggedIn>
          </>}/>
        </Routes>
      }/>
    </Routes>
  );
}