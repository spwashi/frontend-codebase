import {VisualizationParameters} from './config/types';
import {readConfig} from './util/read';


export const doMount       = true;
export const defaultConfig =
                 {
                     height: {type: 'range', min: 200, max: 1000, step: 1, defaultState: 300},
                     width:  {type: 'range', min: 200, max: 1000, step: 1, defaultState: 300},

                     svgWidth:  {type: 'range', min: 0, max: 10000, step: 1, defaultState: 3000},
                     svgHeight: {type: 'range', min: 0, max: 10000, step: 1, defaultState: 3000},

                     offsetX:
                         {
                             type:         'range',
                             min:          -10000,
                             max:          10000,
                             step:         1,
                             defaultState: (config) => (-readConfig(config.svgWidth, 150) ?? 0) / 2,
                         },
                     offsetY:
                         {
                             type:         'range',
                             min:          -10000,
                             max:          10000,
                             step:         1,
                             defaultState: (config) => (-readConfig(config.svgHeight, 150) ?? 0) / 2,
                         },


                     velocityDecay: {type: 'range', min: -1000, max: 1000, step: 1, defaultState: 0},
                     alphaTarget:   {type: 'range', min: -1000, max: 1000, step: 1, defaultState: 1},
                     alphaDecay:    {type: 'range', min: -1000, max: 1000, step: 1, defaultState: 0},


                     // Node Properties
                     n:               {type: 'range', min: 1, max: 100, step: 1, defaultState: 50},
                     radius:          {type: 'range', min: 0, max: 1000, step: 1, defaultState: 100},
                     useNodeStrength: {type: 'toggle', defaultState: true},
                     nodeStrength:    {type: 'range', min: -10000, max: 10000, step: .5, defaultState: -100},

                     // Node Properties
                     clusterN:      {type: 'range', min: 0, max: 100, step: 1, defaultState: 0},
                     clusterRadius: {type: 'range', min: 0, max: 1000, step: 1, defaultState: 75},

                     // Edge Properties
                     useEdgeStrength: {type: 'toggle', defaultState: true},
                     edgeStrength:    {type: 'range', min: -250, max: 250, step: .5, defaultState: 20},
                     edgeWidth:       {type: 'range', min: 0, max: 100, step: 1, defaultState: 30},

                     // Forces
                     useBoundingBox: {type: 'toggle', defaultState: false},
                     boundingOption: {type: 'enum', options: [0, 1, 2], defaultState: 0},

                     useCenteringForce: {type: 'toggle', defaultState: false},
                     useInternalForce:  {type: 'toggle', defaultState: false},
                     useCollisionForce: {type: 'toggle', defaultState: true},
                 } as VisualizationParameters;