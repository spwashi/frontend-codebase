import {FeatureRequirement} from '../_util';
import {RestrictedCreateSceneForm} from './behaviors/create';
import React from 'react';
import {SceneFeatures} from './Features';
import {SceneDisplayForm} from './components/display/DisplayForm';
import {AllScenesSceneDisplay} from './components/graphql/all/components/DisplayAll';
import {Route, Routes} from 'react-router';
import {NavLink} from 'react-router-dom';
import {TagFeatures} from '../tags/Features';
import {UserFeatures} from '../users/Features';
import {RestrictedEditSceneForm} from './behaviors/edit';

export function ScenesControlPanel() {
    return (
        <React.Fragment>
            <UserFeatures/> <SceneFeatures/> <TagFeatures/>
            <NavLink to="/scenes">Scene Home</NavLink>
            <NavLink to="/all">All Scenes</NavLink>
            <FeatureRequirement name="scenes">
                <Routes>
                    <Route path="all" element={<div style={{width: 500 + 'px'}}><AllScenesSceneDisplay/></div>}/>
                    <Route path="" element={
                        <section>
                            <RestrictedCreateSceneForm/>
                            <RestrictedEditSceneForm/>
                            <FeatureRequirement name="scenes.display">
                                <SceneDisplayForm/>
                            </FeatureRequirement>
                        </section>
                    }/>
                </Routes>
            </FeatureRequirement>
        </React.Fragment>
    );
}