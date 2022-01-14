import {SimulationData} from '../../data/types';
import {SvgSelection} from '../svg';
import {ForceConfiguration} from '../../simulation/forces/types';

export type PixelMeasurement = number;

type Width = PixelMeasurement;
type Height = PixelMeasurement;

export type ViewBox = [number, number, Width, Height];
/**
 * Objects,
 *  information,
 *  and functions to read and modify the nodes of a specific branch of components in this visualization
 */
export interface SimulationElement {
    name: keyof SimulationData;

    /**
     * Called when data changes
     *
     * @param svg
     * @param data
     */
    update: (svg: SvgSelection, data: SimulationData) => void;

    /**
     * Called when the simulation "ticks"
     *
     * @param selection
     */
    tick: (selection: SvgSelection) => void;
}

export interface SimulationBasis<T extends SimulationElement[] = []> {
    svg: SvgSelection;
    data: SimulationData;
    forces: ForceConfiguration;
    components: T
}