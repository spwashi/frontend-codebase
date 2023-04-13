import React, {useCallback, useState} from 'react';
import {Dev} from './Dev';
import {useSelector} from 'react-redux';

import ReactJson from 'react-json-view'
import {devClassNames} from '../../../styles/.environments/development/classNames';
import classNames from 'classnames';
import {appClassNames} from '../../../styles/classNames';

type StyleOptions =
  'json'
  | 'plain';

type type = {
  style?: StyleOptions;
  open?: boolean;
  children: any;
  title?: string;
  error?: any;
  logReason?: string | null;
};

function useBinaryState(defaultState?: boolean): [boolean, (force?: boolean) => void] {
  const [state, setState] = useState(!!defaultState);

  const pushToggle = useCallback(
    (force?: boolean) => {
      if (typeof force != void 0) setState(!!force)
      else setState(state => !state);
    },
    [],
  );

  return [state, pushToggle]
}

export function Log({
                      children,
                      style = 'json',
                      open,
                      logReason = null,
                      error,
                      title,
                    }: type) {
  const [isActive, toggleActive] = useBinaryState(false)
  return (
    <Dev>
      <div className={classNames([
                                   devClassNames.devLogComponents.container,
                                   isActive ? appClassNames.states.active : appClassNames.states.inactive,
                                 ])}>
        <div className={classNames([
                                     devClassNames.devLogComponents.controls,
                                   ])}>
          <button className={isActive ? 'deactivate' : 'activate'} onClick={() => toggleActive(!isActive)}>{isActive ? 'close' : 'open'}</button>
        </div>
        <div className={devClassNames.devLogComponents.wrapper}>
          <details open={open} className={devClassNames.devLog + (error ? ' error' : '')}>
            {title && <summary><span>{title}</span> <span className="reason">{logReason}</span> <span className="generic">[devlog]</span></summary>}
            {
              children && (
                style === 'json'
                ? <ReactJson src={JSON.parse(JSON.stringify(children))}/>
                : <pre>{JSON.stringify(children, null, 3)}</pre>
              )
            }
          </details>
        </div>
      </div>
    </Dev>
  )
}

export function LogAppReduxState({open, style}: { style?: StyleOptions, open?: boolean }) {
  const state = useSelector(state => state)
  return (
    <Log title={'App State'} style={style} open={open}>{state}</Log>
  )
}
