import {NodeDatumSelection} from '../types';
import {node_selectFill, node_selectRadius, node_selectX, node_selectY} from '../datum/selectors';

export default function nodeSelection_style(selection: NodeDatumSelection) {
    return selection.attr('cx', node_selectX)
                    .attr('cy', node_selectY)
                    .attr('fill', node_selectFill)
                    .attr('r', node_selectRadius)
}