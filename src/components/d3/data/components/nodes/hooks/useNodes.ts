import {VisualizationParameters} from '../../../../app/components/config/config/types';
import {useCallback, useEffect} from 'react';
import {NodeDatum} from '../types';
import {readConfig} from '../../../../app/components/config/util/read';
import {useDebounce} from '../../../../hooks/util/useDebounce';
import {node_init} from '../datum/initializer';
import {DataController, useDataController, useDatumQuantityStabilizer} from './useDatumQuantityStabilizer';
import {node_selectId} from '../datum/selectors';

export function useShallowUpdateForConfig(config: VisualizationParameters, controller: DataController<NodeDatum>) {
    const radius = readConfig(config.radius, 10);
    useEffect(() => {
        controller.items.forEach((item, k) => {
            const id   = controller.getId(item);
            const seed = {
                id:    id ?? k % 30,
                x:     item.x ?? (k * 30 * radius),
                r:     radius * (item._r ?? 1),
            };
            Object.assign(item, id ? seed : controller.init(seed));
            controller.map.set(controller.getId(item), item)
        })
    }, [radius, controller.items, controller]);
}

/**
 * Updates the Data Controller when the raw data changes, or
 * @param raw
 * @param config
 */
function useNodeUpdate(raw: NodeDatum[], config: VisualizationParameters) {
    const sort       = useCallback((a: NodeDatum, b: NodeDatum) => a && b ? 0 : (a ? -1 : 1), []);
    const controller = useDataController(raw, node_selectId, node_init, sort);
    const quantity   = useDebounce(Math.floor(readConfig(config.n, 1000)), 500);
    useShallowUpdateForConfig(config, controller);
    useDatumQuantityStabilizer<NodeDatum>(controller, quantity, 'nodes');
    return controller;
}
export function useNodes(config: VisualizationParameters, raw: NodeDatum[]) {
    return useNodeUpdate(raw, config);
}