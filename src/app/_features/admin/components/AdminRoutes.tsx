import {Routes} from 'react-router-dom';
import {Route} from 'react-router';
import {adminPaths} from '../../../../.junction/routes/routes';
import {UsersControlPanel} from '../../users/components/ControlPanel';
import {ProjectsControlPanel} from '../../projects/_behaviors/admin/ControlPanel';
import {ConceptsControlPanel} from '../../concepts/_behaviors/admin/ControlPanel';
import {ScenesControlPanel} from '../../scenes/_behaviors/admin/ControlPanel';
import {EventsControlPanel} from '../../events/_behaviors/admin/ControlPanel';
import {TagsControlPanel} from '../../tags/_behaviors/admin/ControlPanel';
import {AssetsControlPanel} from '../../assets/_behaviors/admin/ControlPanel';
import {LoggedIn, NotLoggedIn} from '../../users/_behaviors/login/components/Requirement';
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