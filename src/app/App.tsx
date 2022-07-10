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


function App() {
    const noGraphql = useSelector(select_noGraphql);
    const className = classnames({noGraphql})
    return (
        <BrowserRouter>
            {/*<State/>*/}
            <Bootstrap/>
            <nav>
                <ul>
                    {
                        [
                            {href: '/users', title: 'Users'},
                            {href: '/projects', title: 'Projects'},
                            {href: '/scenes', title: 'Scenes'},
                            {href: '/concepts', title: 'Concepts'},
                            {href: '/events', title: 'Events'},
                            {href: '/tags', title: 'Tags'},
                            {href: '/assets', title: 'Assets'},
                            {href: '/all', title: 'All'},
                        ].map(
                            link => <li key={link.href}><NavLink to={link.href}>{link.title}</NavLink></li>,
                        )
                    }

                </ul>
            </nav>
            <div id="app" className={className}>
                <div className="app">
                    <Routes>
                        <Route path="users" element={<UsersControlPanel/>}/>
                        <Route path="projects" element={<ProjectsControlPanel/>}/>
                        <Route path="concepts/*" element={<ConceptsControlPanel/>}/>
                        <Route path="scenes/*" element={<ScenesControlPanel/>}/>
                        <Route path="events/*" element={<EventsControlPanel/>}/>
                        <Route path="tags" element={<TagsControlPanel/>}/>
                        <Route path="assets" element={<AssetsControlPanel/>}/>
                        <Route path="all" element={<>
                            <NotLoggedIn><UsersControlPanel/></NotLoggedIn>
                            <LoggedIn><ConceptsControlPanel/></LoggedIn>
                            <LoggedIn><TagsControlPanel/></LoggedIn>
                            <LoggedIn><AssetsControlPanel/></LoggedIn>
                        </>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
