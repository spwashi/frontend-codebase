import {Routes} from 'react-router-dom';
import {Route} from 'react-router';
import {adminPaths} from '../../../../.junction/routes/routes';
import {UsersControlPanel} from '../../users/behaviors/admin/ControlPanel';
import {ProjectsControlPanel} from '../../projects/behaviors/admin/ControlPanel';
import {ConceptsControlPanel} from '../../concepts/behaviors/admin/ControlPanel';
import {ScenesControlPanel} from '../../scenes/behaviors/admin/ControlPanel';
import {EventsControlPanel} from '../../events/behaviors/admin/ControlPanel';
import {TagsControlPanel} from '../../tags/behaviors/admin/ControlPanel';
import {AssetsControlPanel} from '../../assets/behaviors/admin/ControlPanel';
import {LoggedIn, NotLoggedIn} from '../../users/behaviors/login/components/Requirement';
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