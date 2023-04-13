import React from 'react';
import {useSelector} from 'react-redux';
import {select_noGraphql} from './redux/reducer';

import classnames from 'classnames';
import {BrowserRouter} from 'react-router-dom';
import {LogAppReduxState} from './components/Log';
import {appClassNames} from '../styles/classNames';
import {AdminControlPanel} from '../admin/components';


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
      <div id="application-container" className={className}>
        <div className="stage-open" aria-hidden="true"/>
        <div className="app-wrapper">
          <main>
            {canBeAdmin && <AdminControlPanel/>}
          </main>
        </div>
        <div className="stage-close" aria-hidden="true"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
