import {FormEvent} from 'react';

export interface FormState<T extends any = any> {
  id?: string;

  key: number;
  data: T;
  initialValue?: T;
  lastReset: number | undefined,
  submit: (e?: FormEvent) => void,

  dispatch?: (action: { type: string, payload: any }) => void;
  changed: { [k: string]: boolean }
}
