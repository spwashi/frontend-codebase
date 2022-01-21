import {Selection} from 'd3';
import {getComponentWrapperSelector} from '../../../util/getComponentWrapperClassname';
import {COMPONENT_NAME} from '../constants';
import {ClusterDatum, ClusterDatumSelection} from '../types';
import {SvgSelection} from '../../../../types/svg';

export type ClusterWrapperSelection = Selection<SVGGElement, ClusterDatum, any, any>;

export const svg_selectClusters = (svg: SvgSelection): ClusterWrapperSelection =>
    svg.select(getComponentWrapperSelector(COMPONENT_NAME))
       .selectAll('g');

export const svg_selectCircles = (svg: SvgSelection) =>
    svg_selectClusters(svg)
        .selectAll('circle') as ClusterDatumSelection;
