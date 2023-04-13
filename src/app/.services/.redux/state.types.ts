export interface IFeatureState<D = any, F = any> {
  enabled: boolean;
  features: F;
  data: D;
}

/**
 * State that has a key that represents some sort of consolidated "version"
 */
export interface IKeyedState<T = any> {
  state:
    {
      key: number;
    } & T
}