import {NavLink, Routes} from 'react-router-dom';
import {Route} from 'react-router';
import {UsersControlPanel} from '../features/users/ControlPanel';
import {ProjectsControlPanel} from '../features/projects/ControlPanel';
import {ConceptsControlPanel} from '../features/concepts/ControlPanel';
import {ScenesControlPanel} from '../features/scenes/ControlPanel';
import {EventsControlPanel} from '../features/events/ControlPanel';
import {TagsControlPanel} from '../features/tags/ControlPanel';
import {AssetsControlPanel} from '../features/assets/Assets';
import {LoggedIn, NotLoggedIn} from '../features/users/behaviors/login/Requirement';
import React from 'react';
import {adminNavigation} from '../../junction/routes/nav';
import {adminPaths} from '../../junction/routes/routes';


export function AdminNav() {
  return (
    <Routes>
      <Route path={adminPaths.admin._path} element={
        <>
          <nav className="admin">
            <ul>
              {adminNavigation.map(link => <li key={link.href}><NavLink to={link.href}>{link.title}</NavLink></li>)}
            </ul>
          </nav>
        </>
      }/>
    </Routes>
  );
}
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
