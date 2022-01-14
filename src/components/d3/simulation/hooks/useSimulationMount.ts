import {SimulationBasis, SimulationElement} from '../../types/simulation';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {forceSimulation, Simulation} from 'd3';
import {initSimulation} from '../forces/init';

/**
 * Hook to handle ticking/updating of the simulation
 *
 * @param root
 */
export function useSimulationMount(root: SimulationBasis<SimulationElement[]>) {
    const data =
              root.data;

    const forces =
              root.forces;

    const [simulation, setSimulation] =
              useState<Simulation<any, any>>();

    const tick =
              useCallback(
                  () => {
                      // console.log('tick', simulation?.alpha())
                      root.components
                          .forEach(component => component.tick(root.svg));
                  },
                  [root],
              );

    const starterSimulation =
              useMemo(
                  () => {
                      console.log('Reinitializing simulation');
                      // console.log(data.nodes)
                      return forceSimulation(data.nodes);
                  },
                  // eslint-disable-next-line
                  [
                      forces?.key,
                      data.nodes,
                  ],
              );

    const forcesRef   = useRef(forces);
    forcesRef.current = forces;

    const refresh =
              useCallback(
                  () => {
                      const nextSimulation = initSimulation(starterSimulation, {forces: forcesRef.current, data, tick});
                      setSimulation(nextSimulation);
                  },
                  [data, tick, starterSimulation, forces?.key],
              );

    useEffect(() => {
        return () => {
            simulation?.stop();
        };
    }, [simulation]);


    useEffect(refresh, [refresh, data.nodes]);
    return simulation;
}