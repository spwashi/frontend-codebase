import {ForceCallbackParams} from '../types';
import {forceCenter} from 'd3';

export function center({forces, simulation}: ForceCallbackParams) {
    return simulation.force('center', forceCenter().strength((forces.options.center ?? 1)));
}