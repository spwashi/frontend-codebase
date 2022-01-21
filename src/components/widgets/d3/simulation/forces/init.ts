import {Simulation} from 'd3';
import {SimulationData} from '../../data/types';
import {ForceConfiguration} from './types';
import {NodeDatum} from '../../data/components/nodes/types';
import {EdgeDatum} from '../../data/components/edges/types';

interface Params {
    forces: ForceConfiguration | undefined;
    data: SimulationData;
    tick: any;
}

export function initSimulation(
    simulation: Simulation<NodeDatum, EdgeDatum>,
    {forces, data, tick}: Params,
) {
    if (!forces) return;
    simulation.stop();
    simulation.nodes(data.nodes ?? []);
    simulation = forces
        .forces
        .reduce(
            (simulation, force) =>
                force({forces, data, simulation}),
            simulation,
        )
        .on('tick', tick);

    simulation.restart();

    return simulation;
}