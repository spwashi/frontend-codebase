import React from 'react';
import {useSelector} from 'react-redux';
import {select_noGraphql} from '../redux/reducer';


import classnames from 'classnames';
import {UsersControlPanel} from './Users';
import {ProjectsControlPanel} from '../features/projects/Projects';
import {Bootstrap} from './Bootstrap';
import {BrowserRouter, NavLink, Routes} from 'react-router-dom';
import {Route} from 'react-router';
import {ConceptsControlPanel} from '../features/concepts/Concepts';
import {LoggedIn, NotLoggedIn} from '../features/users/behaviors/login/State';
import {TagsControlPanel} from '../features/tags/Tags';
import {FilesControlPanel} from '../features/files/Files';


function App() {
    const noGraphql = useSelector(select_noGraphql);
    const className = classnames({noGraphql})
    return (
        <BrowserRouter>
            {/*Always include*/}
            <Bootstrap/>
            <nav>
                <ul>
                    {
                        [
                            {href: '/users', title: 'Users'},
                            {href: '/projects', title: 'Projects'},
                            {href: '/concepts', title: 'Concepts'},
                            {href: '/tags', title: 'Tags'},
                            {href: '/files', title: 'Files'},
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
                        <Route path="tags" element={<TagsControlPanel/>}/>
                        <Route path="files" element={<FilesControlPanel/>}/>
                        <Route path="all" element={<>
                            <NotLoggedIn><UsersControlPanel/></NotLoggedIn>
                            <LoggedIn><ConceptsControlPanel/></LoggedIn>
                            <LoggedIn><TagsControlPanel/></LoggedIn>
                            <LoggedIn><FilesControlPanel/></LoggedIn>
                        </>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
