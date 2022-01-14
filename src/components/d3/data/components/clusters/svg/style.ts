import {ClusterDatumSelection} from '../types';
import {cluster_selectFill, cluster_selectRadius, cluster_selectX, cluster_selectY} from '../datum/selectors';

export default function styleClusters(selection: ClusterDatumSelection) {
    return selection.attr('cx', cluster_selectX)
                    .attr('cy', cluster_selectY)
                    .attr('stroke', 'white')
                    .attr('fill', cluster_selectFill)
                    .attr('r', cluster_selectRadius)
}