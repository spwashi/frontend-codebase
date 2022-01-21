import {ForceCallbackParams} from '../types';
import {NodeDatum} from '../../../data/components/nodes/types';

export function gravity({simulation, data}: ForceCallbackParams) {
    const cy = 0;
    const cx = 0;
    const g  = 9.8;

    const towardsX = true;
    const towardsY = true;


    return simulation.force('gravity', function () {
        const nodes = data.nodes;

        if (typeof nodes === 'undefined') return;
        let i       = 0, n = nodes.length;
        const alpha = simulation.alpha() / 10;

        for (; i < n; ++i) {
            const d = nodes[i] as NodeDatum;
            d.y     = d.y ?? 0
            d.x     = d.x ?? 0
            if (towardsY) d.y += (cy - d.y) * alpha * g;
            if (towardsX) d.x += (cx - d.x) * alpha * g;
        }
    });
}