import React, {useEffect, useRef, useState} from 'react';
import {InputUpdateHandler} from './types';


export function RangeInputValue({value}: { value: number, setValue: (v: number) => void }) {
    return <span>{Math.trunc(value)}</span>;
}


export type RangeInputController = [number, InputUpdateHandler<number>];
export function RangeInputControl(props: { title?: string; min?: number; max?: number; step?: number; controller: RangeInputController }) {
    const [step, setStep]         = useState(props.step === undefined ? 1 : props.step);
    const [max, setMax]           = useState(props.max === undefined ? 1 : props.max);
    const [min, setMin]           = useState(props.min === undefined ? 1 : props.min);
    const [expanded, setExpanded] = useState(false);
    const value                   = props.controller[0];
    const inputRef                = useRef<HTMLInputElement>(null);
    const setValue                = props.controller[1];
    useEffect(
        () => {
            const el = inputRef.current;
            if (!el) return;

            let wheel = (e: WheelEvent): void => {
                e.preventDefault();

                const item = e.shiftKey ? max : (e.metaKey ? min : value);

                const v = item + (step * Math.round(e.deltaY));
                if (e.shiftKey) {
                    setMax(v);
                } else if (e.metaKey) {
                    setMin(v);
                } else {
                    setValue(Math.max(Math.min(v, max), min));
                }
            };
            el.addEventListener('wheel', wheel);

            return () => el.removeEventListener('wheel', wheel)
        },
        [value, min, max, step, inputRef, setValue],
    );
    return (
        <div className="input-wrapper">
            <div className="control-wrapper">
                <input style={{display: 'block', width: '100%'}}
                       type="range"
                       ref={inputRef}
                       min={min}
                       max={max}
                       step={step}
                       value={value ?? ''}
                       onChange={e => setValue(+e.target.value)}/>
                <button onClick={() => setExpanded(!expanded)}>{expanded ? '-' : '+'}</button>
            </div>
            <div className="expanded-controls" style={{display: expanded ? 'block' : 'none'}}>
                <div>
                    <div className="label">Value</div>
                    <input type="number" value={value} onChange={e => setValue(+e.target.value)}/>
                </div>
                <div>
                    <div className="label">Step</div>
                    <input type="number" value={step} onChange={e => setStep(+e.target.value)}/>
                </div>
                <div>
                    <div className="label">Min</div>
                    <input type="number" value={min} onChange={e => setMin(+e.target.value)}/>
                </div>
                <div>
                    <div className="label">Max</div>
                    <input type="number" value={max} onChange={e => setMax(+e.target.value)}/>
                </div>
            </div>
        </div>
    )
}
