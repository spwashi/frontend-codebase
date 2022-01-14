import {VisualizationParameters} from '../../app/components/config/config/types';
import {useEffect, useMemo} from 'react';
import {useClusters} from '../components/clusters/hooks/useClusters';
import {useNodes} from '../components/nodes/hooks/useNodes';
import {useEdges} from '../components/edges/hooks/useEdges';
import {clusterComponent} from '../components/clusters/svg/component';
import {nodeComponent} from '../components/nodes/svg/component';
import {edgeComponent} from '../components/edges/svg/component';
import {NodeDatum} from '../components/nodes/types';

export function useData(config: VisualizationParameters) {
    const nodeData = useMemo(() => [
        {_r: 3},
        {_r: 2},
        {_r: 2},
    ] as NodeDatum[], []);

    const clusters = useClusters(config);
    const nodes    = useNodes(config, nodeData ?? []);
    const edges    = useEdges(config, nodes)

    useEffect(() => {
        nodes.items.forEach(d => {
            d.cluster = clusters.map.get(+(d.id ?? 0) % clusters.items.length);
        })
    }, [clusters.items, nodes.items, clusters.map]);


    const data =
              useMemo(() => {
                  return {
                      nodes:    nodes.items,
                      edges:    edges.items,
                      clusters: clusters.items,
                  };
              }, [nodes.items, edges.items, clusters.items]);

    const components = useMemo(() => [clusterComponent, nodeComponent, edgeComponent], []);
    return {components, data};
}