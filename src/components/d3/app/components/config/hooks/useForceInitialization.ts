import {VisualizationParameters} from '../config/types';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import {readConfig} from '../util/read';
import {BoundingForceConfig, Force, ForceConfiguration} from '../../../../simulation/forces/types';
import {nodeForces} from '../../../../simulation/forces/options/nodeForces';
import {edgeForces} from '../../../../simulation/forces/options/edgeForces';
import {center} from '../../../../simulation/forces/options/center';
import {internal} from '../../../../simulation/forces/options/internal';
import {collision} from '../../../../simulation/forces/options/collision';
import {bounding} from '../../../../simulation/forces/options/bounding';
import {useDebounce} from '../../../../hooks/util/useDebounce';
// import {gravity} from '../../../../simulation/forces/options/gravity';

export function useForceInitialization(appConfig: VisualizationParameters) {
    const forceConfig: ForceConfiguration = useMemo(() => ({
        key:     null,
        forces:  [],
        options: {},
    }), []);

    const doCollide       = useDebounce(readConfig(appConfig.useCollisionForce, !!0), 200);
    const doCenter        = useDebounce(readConfig(appConfig.useCenteringForce, !!0), 200);
    const doInternal      = useDebounce(readConfig(appConfig.useInternalForce, !!0), 200);
    const edgeStrength    = useDebounce(readConfig(appConfig.edgeStrength, 0), 200);
    const height          = useDebounce(readConfig(appConfig.svgHeight), 200);
    const nodeCharge      = useDebounce(readConfig(appConfig.nodeStrength, 0), 200);
    const width           = useDebounce(readConfig(appConfig.svgWidth), 200);
    const useBoundingBox  = readConfig(appConfig.useBoundingBox, false);
    const useEdgeStrength = readConfig(appConfig.useEdgeStrength, false);
    const useNodeStrength = readConfig(appConfig.useNodeStrength, false);
    const boundingOption  = readConfig(appConfig.boundingOption, 0);
    const forceArrRef     = useRef([] as Force[]);
    const setForce        = useCallback((force: Force, shouldBeEnabled: boolean) => {
        const forces         = forceArrRef.current;
        const inArray        = forces.indexOf(force);
        const alreadyInArray = !(inArray + 1);
        if (shouldBeEnabled) {
            if (alreadyInArray) {
                forces.push(force);
            }
            return
        }

        if (!alreadyInArray) {
            forces.splice(inArray, 1)
        }
    }, []);
    useEffect(() => {
                  const offsetX       = 0;
                  const offsetY       = 0;
                  forceConfig.key     = Math.random();
                  forceConfig.options =
                      {
                          ...forceConfig.options,
                          bounding: {
                                        width,
                                        height,
                                        x:      {max: width / 2 + offsetX, min: -width / 2 - offsetX},
                                        y:      {max: height / 2 - offsetY, min: -height / 2 + offsetY},
                                        option: boundingOption,
                                    } as BoundingForceConfig,
                      }
                  setForce(bounding, useBoundingBox);
              },
              [boundingOption, useBoundingBox, setForce, forceConfig, height, width]);

    useEffect(() => {
        forceConfig.key     = Math.random();
        forceConfig.options = {...forceConfig.options, center: doCenter ? 1 : 0}
        setForce(center, doCenter);
    }, [doCenter, forceConfig, setForce]);
    useEffect(() => {
        forceConfig.key = Math.random();
        // setForce(gravity, true);
    }, [forceConfig, setForce])
    ;

    useEffect(() => {
        forceConfig.key     = Math.random();
        forceConfig.options = {...forceConfig.options, nodeCharge}
        setForce(nodeForces, useNodeStrength && !!nodeCharge);
    }, [nodeCharge, useNodeStrength, forceConfig, setForce]);

    useEffect(() => {
        forceConfig.key     = Math.random();
        forceConfig.options = {...forceConfig.options, edgeStrength}
        setForce(edgeForces, useEdgeStrength && !!edgeStrength);
    }, [edgeStrength, useEdgeStrength, forceConfig, setForce]);

    useEffect(() => {
        forceConfig.key     = Math.random();
        forceConfig.options = {...forceConfig.options, internal: doInternal};
        setForce(internal, doInternal);
    }, [doInternal, forceConfig, setForce]);

    useEffect(() => {
        forceConfig.key     = Math.random();
        forceConfig.options = {...forceConfig.options};
        setForce(collision, doCollide);
    }, [doCollide, setForce, forceConfig]);

    forceConfig.forces = forceArrRef.current;

    return forceConfig;
}