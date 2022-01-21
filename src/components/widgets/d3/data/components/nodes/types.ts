import {BaseType, D3DragEvent, Selection} from 'd3';
import {SvgComponentSelection} from '../../../types/svg';
import {ClusterDatum} from '../clusters/types';

export type DatumDragBehavior = {
    locked?: boolean;
    drag?: (event: D3DragEvent<any, any, any>, d: NodeDatum) => void
    release?: (event: D3DragEvent<any, any, any>, d: NodeDatum) => void
    savePos?: boolean;
};

export type DatumForceConfiguration = {
    electronegativity?: number;
    inclination?: (d: NodeDatum) => void
};
export type X = number;
export type Y = number;
export type Id = number;
export type Radius = number;
export type NodeWrapperSelection = Selection<SVGGElement, NodeDatum, any, any>;
export type NodeDatumSelection<T extends BaseType = SVGGElement> = SvgComponentSelection<T, NodeDatum>;

interface ForceAffectedDatum {
    forces?: DatumForceConfiguration,
}

interface PositionedDatum {
    x?: X,
    y?: Y,
}

export interface FixablePositionedDatum extends PositionedDatum {
    fx?: X,
    fy?: Y,
}

export interface DraggableDatum extends PositionedDatum {
    dragBehavior?: DatumDragBehavior
}

interface VelocityOwner {
    vx?: X,
    vy?: Y,
}

export type NodeDatum =
    FixablePositionedDatum
    & {
        // a unique identifier for this Node
        id?: Id,
        // the cluster associated with this Node
        cluster?: ClusterDatum;
        r?: Radius,
        // radius multiplier
        _r?: Radius,
        // the fill color of this node
        color?: string;
        // a number, usually based on position.
        k?: number;
        // text associated with the node
        description?: {
            title?: string
        },
        // other data
        payload?: any
    }
    & VelocityOwner
    & DraggableDatum
    & ForceAffectedDatum;