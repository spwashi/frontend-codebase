import {Simulation} from 'd3';
import {useEffect} from 'react';
import {useSimulationSvg} from './useRootSvg';
import {SimulationElement} from '../../types/simulation';
import {SimulationData} from '../../data/types';
import {useUpdateCollisionForce} from './useUpdateCollisionForce';
import {useSimulationMount} from './useSimulationMount';
import {useConfiguredViewBox} from '../../app/components/config/hooks';
import {useForceInitialization} from '../../app/components/config/hooks/useForceInitialization';
import {VisualizationParameters} from '../../app/components/config/config/types';
import {readConfig} from '../../app/components/config/util/read';

type SimulationController =
    {
        svg: SVGElement | null,
        simulation?: Simulation<any, any>
    };

/**
 * Hook for initializing and managing the state of a simulation
 * @param data
 * @param components
 * @param config
 */
export function useSimulation(
    data: SimulationData,
    components: SimulationElement[],
    config: VisualizationParameters,
): SimulationController {
    const viewBox       = useConfiguredViewBox(config);
    const forces        = useForceInitialization(config);
    const svgSelection  = useSimulationSvg(data, components, viewBox);
    const simulation    = useSimulationMount({data, components, svg: svgSelection, forces});
    const alphaTarget   = readConfig(config.alphaTarget, 0);
    const velocityDecay = readConfig(config.velocityDecay, 0);
    const alphaDecay    = readConfig(config.alphaDecay, 0);

    useEffect(() => { simulation?.alphaDecay(alphaDecay/ 100)?.alphaTarget(alphaTarget / 100).restart(); }, [alphaTarget, simulation, alphaDecay]);
    useEffect(() => { simulation?.velocityDecay(velocityDecay); }, [velocityDecay, simulation]);

    useUpdateCollisionForce(simulation);
    return {
        svg: svgSelection ? svgSelection.node() : null,
        simulation,
    };
}
