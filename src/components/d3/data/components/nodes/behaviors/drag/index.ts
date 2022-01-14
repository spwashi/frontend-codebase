import {drag as d3drag, Selection} from 'd3';
import {DraggableDatum, FixablePositionedDatum, NodeDatum} from '../../types';
import {dragToPosition} from './callbacks/dragToPosition';
import {release} from './callbacks/release';

export function addDragBehavior<D extends DraggableDatum & FixablePositionedDatum, WrapperElement extends SVGGraphicsElement, T extends Selection<WrapperElement, D, any, any>>(selection: T) {
    const dragBehavior =
              d3drag<WrapperElement, D>()
                  .on('drag', (event, d: D) => {
                      event.sourceEvent.stopPropagation()
                      const customDrag = d?.dragBehavior?.drag;
                      if (customDrag) return customDrag(event, d);
                      dragToPosition(event, d);
                  })
                  .on('end', (event, d: NodeDatum) => {
                      event.sourceEvent.stopPropagation();
                      const hasShiftKey = event.sourceEvent.shiftKey;
                      release(d, hasShiftKey);
                  });
    selection.call(dragBehavior);
}