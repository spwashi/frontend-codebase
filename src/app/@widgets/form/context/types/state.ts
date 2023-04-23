export interface IFormContextState<FormData = any> {
  id?: string;
  key: number;
  currentValue: FormData;
  initialValue?: FormData;
  lastReset: number | undefined;
  changed: { [k: string]: boolean };
  dispatch: (action: { type: string; payload: any }) => void;
}
