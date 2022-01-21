import {EnumInputConfig, IVizInputConfig, RangeInputConfig} from '../../config/types';
import {RangeInputControl, RangeInputController, RangeInputValue} from './RangeInputWidget';
import React, {useEffect} from 'react';
import {InputUpdateHandler} from './types';
import {InputWidgetWrapper} from './Wrapper';

interface InputItemParams<T = any> {
    item: IVizInputConfig<T>;
    value: T;
    index: string;
    onChange: InputUpdateHandler<T>;
}

function ToggleInput({value, onChange}: { value: boolean, onChange: (state: boolean) => void }) {
    return <input type="checkbox" checked={value} onChange={event => onChange(event.target.checked)}/>
}

function EnumInput({value, onChange, options}: { value: any, onChange: (state: any) => void, options: any[] }) {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    )
}

export default function InputWidgetFactory({item, value, index, onChange}: InputItemParams) {
    const {type, state} = item;
    let valueComponent: JSX.Element | any;
    let inputComponent: JSX.Element | any;

    useEffect(() => { onChange(state) }, [state, onChange]);

    switch (type) {
        case 'range': {
            const {step, min, max}               = item as RangeInputConfig;
            let controller: RangeInputController = [value || 0, onChange];
            valueComponent                       = <RangeInputValue value={value || 0} setValue={onChange}/>;
            inputComponent                       = <RangeInputControl step={step}
                                                                      min={min}
                                                                      max={max}
                                                                      controller={controller}/>;
            break;
        }
        case 'toggle': {
            valueComponent = value ? 'yes' : 'no';
            inputComponent = <ToggleInput value={!!value} onChange={onChange}/>
            break;
        }
        case 'enum': {
            valueComponent  = value;
            const {options} = item as EnumInputConfig;
            inputComponent  = <EnumInput value={value} options={options} onChange={onChange}/>
            break;
        }
        default:
            return <>{`undefined input type ${type}`}</>;
    }

    return <InputWidgetWrapper title={index} input={inputComponent} value={valueComponent}/>
}