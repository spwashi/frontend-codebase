import {AdminControlPanel} from '../.features/admin/components/AdminControlPanel';
import React from 'react';
import {useSelector} from 'react-redux';
import {select_noGraphql} from '../.services/.redux/reducer';
import classnames from 'classnames';
import {appClassNames} from '../styles/classNames';

interface ApplicationParams {
  canBeAdmin: boolean;
}

export function Application({canBeAdmin}: ApplicationParams) {
  const noGraphql    = useSelector(select_noGraphql);
  const className    = classnames({
                                    noGraphql,
                                    [appClassNames.permissions.appCanBeAdmin]: canBeAdmin,
                                    [appClassNames.permissions.noAdmin]:       !canBeAdmin,
                                  });
  const controlPanel = canBeAdmin && <AdminControlPanel/>;

  return (
    <div id="application-container" className={className}>
      <div className="stage-open" aria-hidden="true"/>
      <div className="app-wrapper">
        {controlPanel}
        <main></main>
      </div>
      <div className="stage-close" aria-hidden="true"/>
    </div>
  );
}