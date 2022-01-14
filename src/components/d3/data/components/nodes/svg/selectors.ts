import {getComponentWrapperSelector} from '../../../util/getComponentWrapperClassname';
import {COMPONENT_NAME} from '../constants';
import {NodeDatumSelection, NodeWrapperSelection} from '../types';
import {SvgSelection} from '../../../../types/svg';


export function svg_selectNodes(svg: SvgSelection): NodeWrapperSelection {
    return svg.select(getComponentWrapperSelector(COMPONENT_NAME))
              .selectAll('g');
}
export function svg_selectCircles(svg: SvgSelection) {
    return svg_selectNodes(svg)
        .selectAll('circle') as NodeDatumSelection;
}
