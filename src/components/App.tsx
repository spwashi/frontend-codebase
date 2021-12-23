import './App.css';
import React, {useState} from 'react';

import {SignupForm} from './user/SignupForm/SignupForm'
import {LogInForm} from './user/LoginForm/LoginForm';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
function FileUploadForm() {
    const [files, setFiles] = useState<FileList | null>(null);

    const submit = () => {
        const data = new FormData();
        if (!files) return;
        [...files].forEach((file, key) => {
            data.append(`file[${key}]`, file)
        })
        data.append('user', 'spwashi')
        const url = `${BACKEND_URL}/upload`;
        fetch(url, {method: 'POST', body: data, mode: 'cors'})
            .then(() => alert('File Uploaded'))
            .catch(() => alert('Could not upload file'))
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            submit()
        }}>
            <input type="file" name="file" onChange={e => setFiles(e.target.files)}/>
            <input type="submit"/>
        </form>
    );
}
function App() {
    if (!BACKEND_URL?.length) return null;
    return (
        <div className="App">
            <SignupForm/>
            <LogInForm/>
            <FileUploadForm/>
        </div>
    );
}

export default App;