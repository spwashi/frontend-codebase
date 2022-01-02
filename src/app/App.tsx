import React from 'react';
import {useSelector} from 'react-redux';
import {select_noGraphql} from '../redux/reducer';


import classnames from 'classnames';
import {FilesControlPanel} from './Files';
import {TagsControlPanel} from './Tags';
import {ConceptsControlPanel} from './Concepts';
import {UsersControlPanel} from './Users';
import {ProjectsControlPanel} from './Projects';
import {TagFeatures} from './TagFeatures';
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
