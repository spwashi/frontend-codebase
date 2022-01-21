import {NodeDatum} from '../../../types';

export function release(d: NodeDatum, doReset: boolean) {
    if ((d.dragBehavior?.savePos ?? false) && !doReset) {
        return;
    }
    d.fx = undefined;
    d.fy = undefined
}