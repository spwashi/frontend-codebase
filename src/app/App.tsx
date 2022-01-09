import React from 'react';
import {useSelector} from 'react-redux';
import {select_noGraphql} from '../redux/reducer';


import classnames from 'classnames';
import {FilesControlPanel} from '../features/files/Files';
import {TagsControlPanel} from '../features/tags/Tags';
import {ConceptsControlPanel} from '../features/concepts/Concepts';
import {UsersControlPanel} from './Users';
import {ProjectsControlPanel} from '../features/projects/Projects';
import {Bootstrap} from './Bootstrap';


const FeatureControlPanel = (() => {
    return (
        <>
        </>
    );
});

function App() {
    const noGraphql = useSelector(select_noGraphql);
    const className = classnames({noGraphql})
    return (
        <div id="app" className={className}>
            <Bootstrap/>
            <FeatureControlPanel/>
            <div className="app">
                <ProjectsControlPanel/>
                <UsersControlPanel/>
                <ConceptsControlPanel/>
                <TagsControlPanel/>
                <FilesControlPanel/>
            </div>
        </div>
    );
}

export default App;
