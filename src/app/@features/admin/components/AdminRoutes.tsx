import {Routes} from 'react-router-dom';
import {Route} from 'react-router';
import {adminPaths} from '@junction/routes/routes';
import {UsersControlPanel} from '../../users/behaviors/admin/components/ControlPanel';
import {ProjectsControlPanel} from '../../projects/behaviors/admin/components/ControlPanel';
import {ConceptsControlPanel} from '../../concepts/behaviors/admin/components/ControlPanel';
import {ScenesControlPanel} from '../../scenes/behaviors/admin/components/ControlPanel';
import {EventsControlPanel} from '../../events/behaviors/admin/components/ControlPanel';
import {TagsControlPanel} from '../../tags/behaviors/admin/components/ControlPanel';
import {AssetsControlPanel} from '../../assets/behaviors/admin/components/ControlPanel';
import {LoggedIn} from '../../users/behaviors/login/components/Requirement';
import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {adminControlPanelsPostLoginFeatureName, adminControlPanelsPreLoginFeatureName} from '@features/admin/features';

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
            <LoggedIn state={false}>
              <Feature name={adminControlPanelsPreLoginFeatureName}>
                <UsersControlPanel/>
              </Feature>
            </LoggedIn>
            <LoggedIn>
              <Feature name={adminControlPanelsPostLoginFeatureName}>
                <AssetsControlPanel/>
                <ConceptsControlPanel/>
                <EventsControlPanel/>
                <ScenesControlPanel/>
                <TagsControlPanel/>
              </Feature>
            </LoggedIn>
          </>}/>
        </Routes>
      }/>
    </Routes>
  );
}