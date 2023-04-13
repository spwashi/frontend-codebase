import React, {ChangeEvent, useCallback, useContext, useEffect, useMemo} from 'react';
import {useFormItem} from '../../../../hooks/useFormItem';
import {FormContext} from '../../../../context/FormContext';

export type SelectOption<T extends any = any> =
  {
    title: string;
    value: string;
    payload: T;
  };

type Params<T extends any = any> =
  {
    formKey?: string;
    type?: string;
    options: SelectOption<T>[];
  }
  & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

/**
 *
 * @param options
 * @param multiple
 * @constructor
 */
function Options({options, multiple}: { multiple: boolean, options: SelectOption[] }) {
  return <>
    <option value="">Select {multiple ? 'multiple' : 'one'}...</option>
    {

      options.map((option, index) => {
        if (typeof option === 'string') {
          return <option key={option}>{option}</option>;
        }

        return (
          <option key={option.title + index} value={option.value}>
            {option.title}
          </option>
        )
      })
    }
  </>;
}

function useOnChangeCallback(multiple: undefined | boolean, setValues: (t: any) => void) {
  return useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      if (!multiple) {
        return setValues((e.target.value));
      }
      const options = e.target.options;
      const value   = [];
      let i         = 0;
      for (; i < options.length; i++) {
        if (options[i].selected) {
          value.push((options[i].value));
        }
      }
      setValues(value);
    },
    [multiple, setValues],
  );

}
/**
 *
 * @param name
 * @param formKey
 * @param options
 * @param multiple
 * @param rest
 * @constructor
 */
export function SelectInput(
  {
    name,
    formKey,
    options,
    multiple,
    type,
    ...rest
  }: Params,
) {
  const form                   = useContext(FormContext);
  const valueMap               = useMemo(() => new Map(options.map(option => [
    option.value, option.payload,
  ])), [options]);
  const [{localValue}, update] = useFormItem(form, formKey ?? '', v => Array.isArray(v) ? v.map(v => valueMap.get(v)) : valueMap.get(v));
  const id                     = useMemo(() => 'input--' + Math.random(), []);
  const value                  = multiple ? localValue ?? [] : localValue ?? '';
  const onChange               = useOnChangeCallback(multiple, update);

  useEffect(() => { rest.value && update(rest.value); }, [rest.value])


  return (
    <React.Fragment>
      <select
        {...rest}
        id={id}
        name={name}
        value={value}
        multiple={multiple}
        onChange={onChange}
      >
        <Options
          options={options}
          multiple={!!multiple}
        />
      </select>
    </React.Fragment>
  );
}