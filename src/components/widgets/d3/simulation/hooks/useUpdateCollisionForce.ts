import {ForceCollide, Simulation} from 'd3';
import {useCallback, useEffect} from 'react';

export function useUpdateCollisionForce(simulation: Simulation<any, any> | undefined) {
    const collisionRadius = useCallback(d => d.cr ?? d.r, []);
    useEffect(() => {
        const collisionForce = simulation?.force('collision') as ForceCollide<any>;
        if (!collisionForce) return;
        collisionForce.radius(d => d.cr ?? d.r);
    }, [simulation, collisionRadius]);
}