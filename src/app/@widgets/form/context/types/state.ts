export interface IAppFormContextState<T = any> {
  id?: string;
  key: number;
  data: T;
  initialValue?: T;
  lastReset: number | undefined;
  changed: { [k: string]: boolean };
}
