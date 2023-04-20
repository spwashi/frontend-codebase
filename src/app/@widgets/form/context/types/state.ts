export interface IFormContextState<T = any> {
  id?: string;
  key: number;
  currentValue: T;
  initialValue?: T;
  lastReset: number | undefined;
  changed: { [k: string]: boolean };
  dispatch: (action: { type: string; payload: any }) => void;
}
