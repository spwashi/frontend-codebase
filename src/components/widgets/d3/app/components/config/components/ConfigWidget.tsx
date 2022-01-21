import React, {useCallback} from 'react';
import {VisualizationParameters, VizInputConfig} from '../config/types';
import InputWidgetFactory from './input/InputWidgetFactory';
import {useLocalStorage} from '../../../../hooks/util/useLocalStorage';
import {isConfigWidget} from '../hooks';

type Props = {
    config: VisualizationParameters,
    updateValues: (i: VisualizationParameters) => void
};

export function ConfigWidget({config, updateValues}: Props) {
    const [open, setOpen] = useLocalStorage('spwashi-d3-appconfig.isopen', false);
    const clear           =
              useCallback(
                  () => {
                      global.localStorage?.clear();
                      global.location?.reload();
                  },
                  [],
              );

    const update = useCallback((key: keyof VisualizationParameters, val: any) => {
                                   updateValues({
                                                    ...config,
                                                    [key]:
                                                        {...config[key] || {}, state: val} as VizInputConfig,
                                                });
                               },
                               [config, updateValues]);
    return (
        <div className="d3app__config-widget" key={'inputs'}>
            <button className="primary" onClick={() => setOpen(!open)}>{open ? 'close' : 'edit'} config</button>
            <div className={'d3app__config-widget-list'}>
                {
                    open
                    ? Object.entries(config)
                            .map(([index, item]) => {
                                if (!item) return null;
                                if (!isConfigWidget(item)) return null;

                                const state = item.state ?? item.defaultState;
                                const value = typeof state === 'function' ? state(config) : state;
                                return <InputWidgetFactory value={value}
                                                           index={index}
                                                           key={index}
                                                           item={item}
                                                           onChange={val => update(index as keyof VisualizationParameters, val)}/>;
                            })
                    : null
                }
                {open && <button className="primary" onClick={() => clear()}>reset config</button>}
            </div>
        </div>
    )
        ;
}