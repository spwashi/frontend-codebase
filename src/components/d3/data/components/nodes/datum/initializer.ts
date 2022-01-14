import {NodeDatum} from '../types';
import {cluster_correctNode} from '../../clusters/datum/selectors';

export function node_init(other: Partial<NodeDatum>): NodeDatum {
    const node: NodeDatum = {
        dragBehavior: {savePos: true},
        forces:       {
            inclination(d) {
                const top = window as any;
                !top.l && console.log(d);
                top.l = 100
                cluster_correctNode(d.cluster, d);
            },
        },
    };
    return Object.assign(node, other);
}