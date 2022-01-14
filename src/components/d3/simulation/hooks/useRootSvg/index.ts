import {create} from 'd3';
import {useCallback, useEffect, useMemo} from 'react';
import {SimulationElement, ViewBox} from '../../../types/simulation';
import {SvgSelection} from '../../../types/svg';
import {svg_appendCenterMark} from '../../svg/modifiers/svg_appendCenterMark';
import {svg_appendComponents} from '../../svg/modifiers/svg_appendComponents';
import {svg_addZoomBehavior} from '../../svg/modifiers/svg_addZoomBehavior';
import {useUpdateWhenDataChanges} from './hooks/useUpdateWhenDataChanges';
import {useLocalStorage} from '../../../hooks/util/useLocalStorage';
import {ZoomTransform} from 'd3-zoom';
import {SimulationData} from '../../../data/types';


export function useSimulationSvg(
    data: SimulationData,
    components: SimulationElement[],
    viewBox: ViewBox,
): SvgSelection {

    const [transform, setTransform] = useLocalStorage('spwashi-d3-svg.transform', {k: 1, x: 0, y: 0} as Partial<ZoomTransform>)

    const updateTransform = useCallback((svg) => {
        const g = svg.selectAll('g.wrapper');
        g.attr('transform', `translate(${transform.x},${transform.y}) scale(${transform.k})`);
    }, [transform]);

    const svg =
              useMemo(() => {
                          const svg: SvgSelection = create('svg')
                              .attr('viewBox', viewBox.join(' '))
                              .attr('overflow', 'visible');
                          svg_appendCenterMark(svg, viewBox);
                          svg_appendComponents(svg, components);
                          svg_addZoomBehavior(svg, transform, setTransform);
                          return svg;
                      },
                      // eslint-disable-next-line
                      [viewBox, components]);
    useEffect(() => updateTransform(svg), [updateTransform, svg])

    useUpdateWhenDataChanges(svg, components, data);

    return svg;
}
