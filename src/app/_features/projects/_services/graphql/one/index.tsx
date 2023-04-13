import React, {useContext} from 'react';
import {IProjectIdentifyingPartial} from '../../../../../../.junction/models/project/models';
import {ProjectTemporaryContextProvider} from '../../../context/Provider';
import {ActiveProject} from './components/Display';
import {OneProjectQuery} from './components/Query';
import {ProjectContext} from '../../../context/context';
import {useDispatch} from 'react-redux';
import {ACTION_PROJECT_SELECTED} from '../../redux/reducer';
import {useChangeEffect} from '../../../../../hooks/util/useChangeEffect';

function SiteProjectDeactivateButton() {
  const context = useContext(ProjectContext);
  if (!context.project) return null;
  return <button onClick={() => {context.setProject(null)}}>[deactivate project]</button>
}

function SiteProjectAutoActivator() {
  const context = useContext(ProjectContext);
  const project = context.project;

  const dispatch = useDispatch();
  useChangeEffect(() => {
    dispatch({type: ACTION_PROJECT_SELECTED, payload: {project, test: 'boon'}})
  }, [project, dispatch]);

  return <></>
}

/**
 * Fetches and caches a project in Local Storage
 */
export function SiteProjectController({id}: IProjectIdentifyingPartial) {
  return (
    <ProjectTemporaryContextProvider>
      {id && <OneProjectQuery id={id}/>}
      <ActiveProject/>
      <SiteProjectAutoActivator/>
      <SiteProjectDeactivateButton/>
    </ProjectTemporaryContextProvider>
  )
}