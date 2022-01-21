export interface FormState<T extends any = any> {
    key: number;
    data: T;
    initialValue?: T;

    dispatch?: (action: { type: string, payload: any }) => void;
    changed: { [k: string]: boolean }
}
