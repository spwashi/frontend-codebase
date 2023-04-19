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
import {LoginRequirement} from '../../users/behaviors/login/components/LoginRequirement';
import React from 'react';
import {Feature} from '@services/features/item/components/Feature';
import {featureId__adminControlPanelsPostLogin, featureId__adminControlPanelsPreLogin} from '../../../@/featureIds';

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
            <LoginRequirement state={false}>
              <Feature name={featureId__adminControlPanelsPreLogin}>
                <UsersControlPanel/>
              </Feature>
            </LoginRequirement>
            <LoginRequirement>
              <Feature name={featureId__adminControlPanelsPostLogin}>
                <AssetsControlPanel/>
                <ConceptsControlPanel/>
                <EventsControlPanel/>
                <ScenesControlPanel/>
                <TagsControlPanel/>
              </Feature>
            </LoginRequirement>
          </>}/>
        </Routes>
      }/>
    </Routes>
  );
}