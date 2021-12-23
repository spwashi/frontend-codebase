import React from 'react';
import { useContext, useCallback, useRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';

// Define mutation
const INCREMENT_COUNTER = gql`
    mutation SignUp($user: UserInput, $password: PasswordInput) {
        signUp(user: $user, password: $password) {
            email
            name
        }
    }
`;

function MyComponent() {
  // Pass mutation to useMutation

}



const FormContext = React.createContext({key:'' as string|number    , data: {} as {[k:string]:any}});


function Child() {
    const options = ['hello', 'other', {title: 'This is an option', value: 'This is a value'}];
    return (
        <FormContext.Consumer>{
            ({data}) => 
            <React.Fragment key={data.key}>
                    {JSON.stringify(data)}
                    <TextInput formKey='name'/>
                    <TextInput formKey='email'/>
                    <TextInput formKey='password' type="password"/>
                    <TextInput formKey='passwordConfirm' type="password"/>
                    {/* <SelectInput formKey='name' options={options}/> */}
                    <button type="submit">submit</button>
                </React.Fragment>
        }</FormContext.Consumer>
        )
    }
    
export function SignUpForm() {
    const [mutateFunction, { data, loading, error }] = useMutation(INCREMENT_COUNTER);
    const ref    = useRef({key: '', data:{} as {[k:string]:any}});
    const onsubmit = useCallback((event) => {
        event.preventDefault();
        const {name, email, password, passwordConfirm} = ref.current.data;
        mutateFunction({variables: {user:{name, email}, password: {password, passwordConfirm}}})
        console.log(ref.current);
    }, [data]);
    return (
        <FormContext.Provider value={ref.current}>
            {JSON.stringify({data, loading, error})}
            <form onSubmit={onsubmit}>
                <Child key={ref.current.key}/>
            </form>
        </FormContext.Provider>
    )
}

function TextInput({formKey, name, ...rest}:{formKey:string} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    const form                        = useContext(FormContext);
    const data                        = form.data;    
    const [localValue, setLocalValue] = useState('');
    const update                      = useCallback((text) => {
            Object.assign(form, { key:Date.now(), data:{...form.data, [formKey]:text} })
            setLocalValue(text); 
        }, 
        [form.data[formKey]]
    );
    
    const onChange        = getInputChangeHandler(update);
    const {type = 'text'} = rest;
    const value           = data[formKey];
    return (
        <>
            <input
                type={type} 
                name={name} 
                value={localValue} 
                onChange={onChange} 
            />
        </>
    );
}

function SelectInput({formKey, name, options, ...rest}:{formKey:string, options: (string|{title:string, value: string})[]} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    const [localValue, setLocalValue] = useState('');
    const form          = useContext(FormContext);
    form.data[formKey]  = localValue;
    const onChange      = getInputChangeHandler(setLocalValue);

    return (
        <select 
            name={name} 
            value={localValue ?? ''} 
            onChange={onChange}>{
                    options.map((option) => {
                        if (typeof option === 'string') return <option key={option}>{option}</option>;
                        return (
                            <option key={option.value}>{option.title}</option>
                        )
                    })
            }</select>

    );
}


function getInputChangeHandler(setValue: React.Dispatch<React.SetStateAction<string>>): React.ChangeEventHandler<HTMLInputElement|HTMLSelectElement> | undefined {
    return e => setValue(e.target.value);
}
