type DefaultState<T = any> =
    ((c: Partial<VisualizationParameters>) => T)
    | T;
export type IVizInputConfig<T, S = string> = { type: S, state?: T; defaultState: DefaultState<T> };
export type ToggleInput =
    IVizInputConfig<boolean>
    & { type: 'toggle' };
export type RangeInputConfig =
    IVizInputConfig<number>
    & { type: 'range', min: number, max: number, step: number };
export type EnumInputConfig<T = any> =
    IVizInputConfig<T>
    & { type: 'enum', options: T[] };
export type VizInputConfig =
    | ToggleInput
    | EnumInputConfig
    | RangeInputConfig;


type VisualizationParameterOptions =
    {
        n: RangeInputConfig,
        radius: RangeInputConfig,
        clusterN: RangeInputConfig,
        clusterRadius: RangeInputConfig,
        edgeStrength: RangeInputConfig,
        edgeWidth: RangeInputConfig,
        nodeStrength: RangeInputConfig,
        useNodeStrength: ToggleInput,
        useEdgeStrength: ToggleInput,
        height: RangeInputConfig,
        width: RangeInputConfig,
        svgWidth: RangeInputConfig,
        svgHeight: RangeInputConfig,
        offsetX: RangeInputConfig,
        offsetY: RangeInputConfig,
        useBoundingBox: ToggleInput,
        boundingOption: EnumInputConfig,
        useCenteringForce: ToggleInput,
        useCollisionForce: ToggleInput,
        useInternalForce: ToggleInput,
        velocityDecay: RangeInputConfig
        alphaTarget: RangeInputConfig
        alphaDecay: RangeInputConfig
    };

export type VisualizationParameters = Partial<VisualizationParameterOptions>;
