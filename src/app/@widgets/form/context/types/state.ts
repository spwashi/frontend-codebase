import { FormEvent } from "react";

export interface FormState<T = any> {
  id?: string;

  key: number;
  data: T;
  initialValue?: T;
  lastReset: number | undefined;
  changed: { [k: string]: boolean };
}
