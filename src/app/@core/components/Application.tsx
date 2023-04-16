import React from 'react';
import {AdminControlPanel} from '@features/admin/components/AdminControlPanel';
import {useSelector} from 'react-redux';
import {select_noGraphql} from '@services/redux/reducer';
import classnames from 'classnames';
import {appClassnames} from '../styles/classNames';

interface ApplicationParams {
  canBeAdmin: boolean;
}

export function Application({canBeAdmin}: ApplicationParams) {
  const noGraphql = useSelector(select_noGraphql);
  const className = classnames({
                                 noGraphql,
                                 [appClassnames.permissions.appCanBeAdmin]: canBeAdmin,
                                 [appClassnames.permissions.noAdmin]:       !canBeAdmin,
                               });
  return (
    <div id="application-container" className={className}>
      <div className="stage-open" aria-hidden="true"/>
      <div className="app-wrapper">
        {canBeAdmin && <AdminControlPanel/>}
        <main>
        </main>
      </div>
      <div className="stage-close" aria-hidden="true"/>
    </div>
  );
}