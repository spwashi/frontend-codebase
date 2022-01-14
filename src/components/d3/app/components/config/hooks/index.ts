import {VisualizationParameters, VizInputConfig} from '../config/types';
import {ViewBox} from '../../../../types/simulation';
import {useEffect, useMemo} from 'react';
import {readConfig} from '../util/read';
import {useLocalStorage} from '../../../../hooks/util/useLocalStorage';
import {merge} from 'lodash';

export function useConfiguredViewBox(config: VisualizationParameters) {
    const viewBox: ViewBox = useMemo(() =>
                                         [
                                             readConfig(config.offsetX, 0, config) ?? 0,
                                             readConfig(config.offsetY, 0, config) ?? 0,
                                             readConfig(config.svgWidth, 100, config) || 1,
                                             readConfig(config.svgHeight, 100, config) || 1,
                                         ],
                                     [config])
    return viewBox;
}
export function useConfiguredSize(state: VisualizationParameters) {
    const {width, height} = state;
    return {width: readConfig(width), height: readConfig(height)};
}

export function isConfigWidget(input: any): input is VizInputConfig {
    return input?.hasOwnProperty('type');
}


export function useAppConfig<T extends VisualizationParameters = any>(model: T): [T, (config: Partial<T>) => void] {
    const [config, setState] = useLocalStorage<Partial<T>>('spwashi-d3-appconfig', model)
    useEffect(() => {
                  setState(
                      Object.fromEntries(
                          Object.entries(merge({}, config, model))
                                .map(
                                    ([key, configValue]) => [
                                        key,
                                        !isConfigWidget(configValue)
                                        ? configValue
                                        : {
                                                state: configValue?.defaultState,
                                                ...configValue || {},
                                            },
                                    ],
                                ),
                      ) as T,
                  )
              },
              // eslint-disable-next-line react-hooks/exhaustive-deps
              [model])
    return [config as T, setState];
}