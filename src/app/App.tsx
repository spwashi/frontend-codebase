import React from 'react';
import {useSelector} from 'react-redux';
import {select_noGraphql} from './redux/reducer';

import classnames from 'classnames';
import {Bootstrap} from './Bootstrap';
import {BrowserRouter} from 'react-router-dom';
import {LogAppReduxState} from './components/Log';
import {appClassNames} from '../styles/classNames';
import {AdminNav, AdminRoutes} from './admin/Admin';


function App() {
  const noGraphql  = useSelector(select_noGraphql);
  const canBeAdmin = true;
  const className  = classnames({
                                  noGraphql,
                                  [appClassNames.permissions.appCanBeAdmin]: canBeAdmin,
                                  [appClassNames.permissions.noAdmin]:       !canBeAdmin,
                                })
  return (
    <BrowserRouter>
      <LogAppReduxState/>
      <Bootstrap/>
      <div id="application-container" className={className}>
        <div className="stage-open" aria-hidden="true"/>
        <div className="app-wrapper">
          <div className="app-body">
            {
              canBeAdmin && (
                <>
                  <AdminNav/>
                  <AdminRoutes/>
                </>
              )
            }
          </div>
        </div>
        <div className="stage-close" aria-hidden="true"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
