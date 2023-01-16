import React, {useCallback, useState} from 'react';
import {Dev} from './Dev';
import {useSelector} from 'react-redux';

import ReactJson from 'react-json-view'
import {devClassNames} from '../styles/environments/classes';
import classNames from 'classnames';
import {widgetClassNames} from '../styles/classNames';

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
                                   isActive ? widgetClassNames.states.active : widgetClassNames.states.inactive,
                                 ])}>
        <div className={classNames([
                                     devClassNames.devLogComponents.controls,
                                     devClassNames.devLogComponents.controls,
                                   ])}>
          <button className={'deactivate'} onClick={() => toggleActive(false)}>close</button>
          <button className={'activate'} onClick={() => toggleActive(true)}>open</button>
        </div>
        <div className={devClassNames.devLogComponents.wrapper}>
          <details open={open} className={devClassNames.devLog + (error ? ' error' : '')}>
            {title && <summary>{title} <span className="devlog--title reason">{logReason}</span> <span className="devlog--title generic">[devlog]</span></summary>}
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
