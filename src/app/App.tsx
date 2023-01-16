import React from 'react';
import {useSelector} from 'react-redux';
import {select_noGraphql} from '../redux/reducer';


import classnames from 'classnames';
import {ProjectsControlPanel} from '../features/projects/ControlPanel';
import {Bootstrap} from './Bootstrap';
import {BrowserRouter, NavLink, Routes} from 'react-router-dom';
import {Route} from 'react-router';
import {ConceptsControlPanel} from '../features/concepts/ControlPanel';
import {LoggedIn, NotLoggedIn} from '../features/users/behaviors/login/Requirement';
import {TagsControlPanel} from '../features/tags/ControlPanel';
import {AssetsControlPanel} from '../features/assets/Assets';
import {UsersControlPanel} from '../features/users/ControlPanel';
import {ScenesControlPanel} from '../features/scenes/ControlPanel';
import {EventsControlPanel} from '../features/events/ControlPanel';
import {LogAppReduxState} from '../components/Log';


function App() {
  const noGraphql = useSelector(select_noGraphql);
  const className = classnames({noGraphql})
  return (
    <BrowserRouter>
      <LogAppReduxState/>
      <Bootstrap/>
      <nav>
        <ul>
          {
            [
              {href: '/admin/users', title: 'Users'},
              {href: '/admin/projects', title: 'Projects'},
              {href: '/admin/scenes', title: 'Scenes'},
              {href: '/admin/concepts', title: 'Concepts'},
              {href: '/admin/events', title: 'Events'},
              {href: '/admin/tags', title: 'Tags'},
              {href: '/admin/assets', title: 'Assets'},
              {href: '/admin/all', title: 'All'},
            ].map(
              link => <li key={link.href}><NavLink to={link.href}>{link.title}</NavLink></li>,
            )
          }

        </ul>
      </nav>
      <div id="app" className={className}>
        <div className="app">
          <Routes>
            <Route path="admin/*" element={
              <Routes>
                <Route path="users/*" element={<UsersControlPanel/>}/>
                <Route path="projects/*" element={<ProjectsControlPanel/>}/>
                <Route path="concepts/*" element={<ConceptsControlPanel/>}/>
                <Route path="scenes/*" element={<ScenesControlPanel/>}/>
                <Route path="events/*" element={<EventsControlPanel/>}/>
                <Route path="tags/*" element={<TagsControlPanel/>}/>
                <Route path="assets/*" element={<AssetsControlPanel/>}/>
                <Route path="all/*" element={<>
                  <NotLoggedIn><UsersControlPanel/></NotLoggedIn>
                  <LoggedIn><AssetsControlPanel/></LoggedIn>
                  <LoggedIn><ConceptsControlPanel/></LoggedIn>
                  <LoggedIn><EventsControlPanel/></LoggedIn>
                  <LoggedIn><ScenesControlPanel/></LoggedIn>
                  <LoggedIn><TagsControlPanel/></LoggedIn>
                </>}/>
              </Routes>
            }/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
